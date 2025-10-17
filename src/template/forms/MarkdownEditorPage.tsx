import { Card } from '@/components';
import { ThemeContext } from '@/context/ThemeContext';
import 'easymde/dist/easymde.min.css';
import { useCallback, useContext, useMemo, useState } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';

const MarkdownEditorPage = () => {
    const { colortheme } = useContext(ThemeContext);

    const [value, setValue] = useState(
        `# Basic Example
Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even[links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.

## Lists
Unordered lists can be started using the toolbar or by typing '*', '-', or '+'. Ordered lists can be started by typing '1.'.

#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift - tabs work too

#### Ordered
1. Numbered lists...
2. ...work too!

## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)
`
    );

    const onChange = useCallback((value: string) => {
        setValue(value);
    }, []);

    const delay = 1000;
    const autosavedValue =
        localStorage.getItem(`smde_demo`) ||
        `# Autosaving!

  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  By default, it saves every 10 seconds, but this can be changed. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted.`;

    const anOptions = useMemo(() => {
        return {
            autosave: {
                enabled: true,
                uniqueId: 'demo',
                delay,
            },
            hideIcons: ['fullscreen', 'side-by-side'] as any,
        };
    }, [delay]);

    const basicOptions = useMemo(() => {
        return {
            hideIcons: ['fullscreen', 'side-by-side'] as any,
        };
    }, []);

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {/* Basic */}
            <Card title='Basic'>
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Basic</span> editor example with standard markdown features.
                </div>
                <div className="markdown-editor mb-5 prose prose-custom dark:prose-invert">
                    <SimpleMdeReact value={value} onChange={onChange} options={basicOptions} />
                </div>
            </Card>

            {/*  Autosaving */}
            <Card title='Autosaving'>
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Simple markdown editor</span> with autosaving features.
                </div>
                <div className="markdown-editor mb-5 prose prose-custom dark:prose-invert">
                    <SimpleMdeReact value={autosavedValue} options={anOptions} />
                </div>
            </Card>
        </div>
    );
};

export default MarkdownEditorPage;
