interface StepIndicatorProps {
    current: number;
    total: number;
}

export default function StepIndicator({ current, total }: StepIndicatorProps) {
    return (
        <div className="flex justify-center gap-2 my-4">
            {Array.from({ length: total }, (_, i) => (
                <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                        i + 1 <= current ? "bg-pink-600" : "bg-gray-300"
                    }`}
                />
            ))}
        </div>
    );
}