declare module "react-ckeditor-component" {
    import * as React from "react";
   
    export interface CKEditorProps {
    content?: string;
    config?: object;
    events?: {
    change?: (e: Event, editor: any) => void;
    };
    activeClassName?: string;
    }
   
    class CKEditor extends React.Component<CKEditorProps> {
    editor: any;
   }
   
    export default CKEditor;
   }