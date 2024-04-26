"use client"
import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditorHTML = (onCodeChange: any) => {
    const [code, setCode] = useState("");

    const handleEditorChange = (newValue: any) => {
        setCode(newValue);
        if (typeof onCodeChange.onCodeChange == "function") {
            onCodeChange.onCodeChange(newValue); // Llamar a la función onCodeChange con el nuevo valor del código
        }
    };

    // console.log(code);
    const options = {
        selectOnLineNumbers: true,
        fontSize: 14,
        minimap: {
            enabled: false,
        },
        suggest: {
            snippetsPreventQuickSuggestions: true,
            snippets: {
                'html': '<!DOCTYPE html>\n<html>\n<head>\n  <title>${1:Page Title}</title>\n</head>\n<body>\n  ${0}\n</body>\n</html>',
            },
        },
    };

    return (
        <MonacoEditor
            width="800"
            height="600"
            language="html"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={handleEditorChange}
        />
    );
};

export default CodeEditorHTML;
