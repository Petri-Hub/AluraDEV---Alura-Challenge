export function hljs(bgColor, color, color1, color2, color3, color4, color5, color6){
    return `
    .hljs,
    .hljs-tag,
    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-literal,
    .hljs-strong,
    .hljs-name,
    .hljs-code,
    .hljs-attribute,
    .hljs-symbol,
    .hljs-regexp,
    .hljs-link,
    .hljs-string,
    .hljs-bullet,
    .hljs-subst,
    .hljs-title,
    .hljs-section,
    .hljs-emphasis,
    .hljs-type,
    .hljs-built_in,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-addition,
    .hljs-variable,
    .hljs-template-tag,
    .hljs-template-variable,
    .hljs-title.class_,
    .hljs-class .hljs-title,
    .hljs-comment,
    .hljs-quote,
    .hljs-deletion,
    .hljs-meta,
    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-literal,
    .hljs-doctag,
    .hljs-title,
    .hljs-section,
    .hljs-type,
    .hljs-number,
    .hljs-selector-id {
        font-family: var(--code_font) !important;
    }

    .hljs {
        background-color: ${bgColor};
        color: ${color};
    }

    .hljs-tag,
    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-literal,
    .hljs-strong,
    .hljs-name {
        color: ${color1};
    }

    .hljs-code {
        color: ${color2};
    }

    .hljs-attribute,
    .hljs-symbol,
    .hljs-regexp,
    .hljs-link {
        color: ${color3};
    }

    .hljs-string,
    .hljs-bullet,
    .hljs-subst,
    .hljs-title,
    .hljs-section,
    .hljs-emphasis,
    .hljs-type,
    .hljs-built_in,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-addition,
    .hljs-variable,
    .hljs-template-tag,
    .hljs-template-variable {
        color: ${color4};
    }

    .hljs-title.class_,
    .hljs-class .hljs-title {
        color: ${color5};
    }

    .hljs-comment,
    .hljs-quote,
    .hljs-deletion,
    .hljs-meta {
        color: ${color6};
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-literal,
    .hljs-doctag,
    .hljs-title,
    .hljs-section,
    .hljs-type,
    .hljs-selector-id {
        font-weight: bold;
    }
`
}
