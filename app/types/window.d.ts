// window.d.ts


interface CustomWindow extends Window {
    dataLayer: unknown[];
}


declare let window: CustomWindow;
