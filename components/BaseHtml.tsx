import Navbar from "./Navbar";

function BaseHtml({ children }: any) {
    return (
        <html>
            <head>
                <title>Ballz</title>
                <link rel="stylesheet" href="./public/out.css" type="text/css" />
                <script src="https://kit.fontawesome.com/5bdc875d30.js" crossorigin="anonymous" />
            </head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

export default BaseHtml;
