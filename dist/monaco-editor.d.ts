import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { VNodeProps } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare const _default: DefineComponent<__VLS_TypePropsToRuntimeProps<EditorProps>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (code: string) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<EditorProps>>> & {
    onChange?: ((code: string) => any) | undefined;
}, {}, {}>;
export default _default;

declare interface EditorProps {
    value: string;
    filename: string;
    readonly?: boolean;
    mode?: PreviewMode;
}

declare type PreviewMode = 'js' | 'css' | 'ssr';

export { }
