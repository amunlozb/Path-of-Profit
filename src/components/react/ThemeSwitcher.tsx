import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

export default function Example() {
    const [enabled, setEnabled] = useState(false);

    // Function to set initial state from localStorage
    useEffect(() => {
        const storedDarkMode = window.localStorage.getItem('dark-mode'); // Add 'window.' before 'localStorage'
        if (storedDarkMode === null) {
            // Dark mode preference is not set, so default to true
            setEnabled(true);
            window.localStorage.setItem('dark-mode', JSON.stringify(true)); // Add 'window.' before 'localStorage'
        } else {
            // Dark mode preference is set, parse and apply it
            const darkModeEnabled = JSON.parse(storedDarkMode);
            setEnabled(darkModeEnabled);
        }
    }, []);

    // Function to handle theme change
    const handleThemeChange = (isChecked: boolean) => {
        setEnabled(isChecked);
        window.localStorage.setItem('dark-mode', JSON.stringify(isChecked)); // Add 'window.' before 'localStorage'
    };

    return (
        <div className="py-16">
            <Switch
                checked={enabled}
                onChange={handleThemeChange}
                className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
                relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    );
}
