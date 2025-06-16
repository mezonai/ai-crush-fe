import React from 'react';
import { Check } from 'lucide-react';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

type Choices = {
  id: number;
  displayName: string;
  value: string;
  isChecked: boolean;
};

type MultipleChoicesProps = {
  choices: Choices[];
  onChange?: (choices: Choices[]) => void;
};

const MultipleChoices: React.FC<MultipleChoicesProps> = ({ choices, onChange }) => {
  const [choicesState, setChoicesState] = React.useState<Choices[]>(choices);

  const onChangeHandle = (newChoice: Choices) => {
    const updatedChoice = { ...newChoice, isChecked: !newChoice.isChecked };
    const choicesIndex = choicesState.findIndex((choice) => choice.id === newChoice.id);
    const updatedChoices = [...choicesState];
    updatedChoices[choicesIndex] = updatedChoice;
    setChoicesState(updatedChoices);
    if (onChange) {
      onChange(updatedChoices);
    }
  };

  return (
    <div className="flex flex-row flex-wrap items-left gap-2">
      {choicesState.map((choice) => (
        <Badge
          variant="special"
          key={choice.id}
          onClick={() => onChangeHandle(choice)}
          className={cn(
            'cursor-pointer h-[28px] font-bold text-[14px]',
            choice.isChecked ? 'text-rose-primary' : 'text-[#414651]',
          )}>
          {choice.isChecked && <Check className="mr-2 h-4 w-4" />}
          {choice.displayName}
        </Badge>
      ))}
    </div>
  );
};

export default MultipleChoices;
