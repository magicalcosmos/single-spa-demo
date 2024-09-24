// 设计组件一定要考虑props, state

// 注释比代码多

const buttonTypes = ["primary", "default", "danger", "link"] as const;

const isPrimary = buttonTypes.find((type) => type === "primary");
const isDefault = buttonTypes.find((type) => type === "default");
const isDanger = buttonTypes.find((type) => type === "danger");
const isLink = buttonTypes.find((type) => type === "link");

type ButtonType = typeof buttonTypes[number];

interface ButtonProps {
    type?: ButtonType;
    disabled?: boolean;
    loading?: boolean;
    size?: "small" | "large";
    onClick?: () => void;
}

const submitKey = "111-submit";
const resetKey = "222-reset";
const cancelKey = "333-cancel";

type ButtonPureTypeKey = typeof submitKey | typeof resetKey | typeof cancelKey;

type ButtonPureKey<T> = T extends `${string}-${infer V}` ? V : never;

type ButtonPureType = ButtonPureKey<ButtonPureTypeKey>;

interface ButtonState {
    name: string;
}   