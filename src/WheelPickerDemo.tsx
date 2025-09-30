import {
  WheelPicker,
  WheelPickerWrapper,
  type WheelPickerOption,
} from '@ncdai/react-wheel-picker';
import { useState } from 'react';

const options: WheelPickerOption[] = [
  {
    label: 'Next.js',
    value: 'nextjs',
  },
  {
    label: 'Vite',
    value: 'vite',
  },
  // ...
];

export function WheelPickerDemo() {
  const [value, setValue] = useState('nextjs');

  return (
    <WheelPickerWrapper className="w-56 rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <WheelPicker
        options={options}
        value={value}
        onValueChange={setValue}
        classNames={{
          optionItem: 'text-zinc-400 dark:text-zinc-500',
          highlightWrapper:
            'bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50',
        }}
      />
    </WheelPickerWrapper>
  );
}
