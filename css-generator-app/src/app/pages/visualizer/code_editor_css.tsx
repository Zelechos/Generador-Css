"use client"
import { editor } from 'monaco-editor';
import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const CssEditor = (codeCSS: any, onCodeChange: any) => {
    console.log("codigo CSS recibido del padre: ", codeCSS.codeCSS);
    console.log(onCodeChange);
    const [code, setCode] = useState(codeCSS.codeCSS);


    // setCode(codeCSS.codeCSS)
    const handleEditorChange = (newValue: any) => {
        console.log(typeof onCodeChange.onCodeChange);
        if (typeof onCodeChange.onCodeChange == "function") {
            setCode(newValue);
            onCodeChange.onCodeChange(newValue); // Llamar a la función onCodeChange con el nuevo valor del código
        } else {
            setCode(codeCSS.codeCSS)
        }
    };
    console.log(code);
    const editorOptions = {
        selectOnLineNumbers: true,
        fontSize: 14,
        minimap: {
            enabled: false,
        },
        language: 'css',
        suggest: {
            snippetsPreventQuickSuggestions: false,
            snippets: {
                'box': 'box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\nborder-radius: 4px;',
                'flex': 'display: flex;\njustify-content: center;\nalign-items: center;',
            },
        },
    };

    return (
        <MonacoEditor
            width="800"
            height="600"
            theme="vs-dark"
            value={code}
            options={editorOptions}
            onChange={handleEditorChange}
        />
    );
};

export default CssEditor;
