import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Embed from '@editorjs/embed'
import Quote from '@editorjs/quote'


const editor = new EditorJs({
    holderId: 'editorjs',
    tools: {
        header: {
            class: Header,
            inlineTollbar: ['link']
        },
        list: {
            class: List,
            inlineToolbar: [
                'link',
                'bold'
            ]
        },
        embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            }
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
                quotePlaceholder: 'Add a quote?',
                captionPlaceholder: 'Something else?'
            }
        }
    }
});

let saveBTn = document.querySelector('button');
saveBTn.addEventListener('click', save);

function save() {
    editor
        .save()
        .then(outputData => console.log(outputData))
        .catch(err => console.log(`Something went wrong with your process ${err}`));
}
