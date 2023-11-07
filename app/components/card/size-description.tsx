import React from "react";

function SizeDescription({ propiedad, size }: any) {
  const iconSize = () => {
    switch (size) {
      case "xs":
        return "15";
      case "s":
        return "20";
      case "m":
        return "25";
      case "l":
        return "30";
      case "xl":
        return "35";
      case "2xl":
        return "50";
      default:
        return "25";
    }
  };

  const textSize = () => {
    switch (size) {
      case "xs":
        return "text-xs";
      case "s":
        return "text-sm";
      case "m":
        return "text-base";
      case "l":
        return "text-lg";
      case "xl":
        return "text-xl";
      case "2xl":
        return "text-2xl";
      default:
        return "text-base";
    }
  };
  return (
    <div className="flex w-full justify-around  p-2 py-8 items-center h-10">
      <div className="flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize()}
          height={iconSize()}
          viewBox="0 0 210 210"
          fill="none"
        >
          <g clipPath="url(#clip0_230:2)">
            <path
              d="M81.7488 122.448H84.0748V109.99C84.0708 109.648 83.9323 109.321 83.6888 109.079C83.4454 108.838 83.1165 108.7 82.7723 108.696H78.663C78.663 111.776 78.8336 114.856 79.0352 118.182C79.0833 119.064 79.3579 119.919 79.833 120.666C80.308 121.413 80.9675 122.026 81.7488 122.448V122.448Z"
              fill="#5F5F5F"
            />
            <path
              d="M89.1454 103.46C89.3625 89.4768 91.4094 81.1916 93.6733 76.5408V123.018C95.1218 123.597 96.3633 124.592 97.239 125.876C98.1146 127.16 98.5847 128.674 98.5889 130.225V172.005C98.5833 173.29 98.2592 174.554 97.6453 175.684C97.0314 176.815 96.1466 177.778 95.0689 178.489C96.04 179.909 97.444 180.982 99.0747 181.551C100.705 182.12 102.477 182.154 104.129 181.649C105.781 181.145 107.226 180.127 108.252 178.746C109.279 177.365 109.832 175.693 109.831 173.977V115.364H112.932V173.977C112.932 176.105 113.784 178.145 115.299 179.65C116.814 181.155 118.869 182 121.011 182C123.154 182 125.209 181.155 126.724 179.65C128.239 178.145 129.09 176.105 129.09 173.977V76.5562C132.021 82.593 134.626 94.759 133.277 117.582C133.211 118.749 133.545 119.905 134.223 120.861C134.901 121.817 135.885 122.517 137.014 122.849V125.359H133.231C132.884 125.363 132.552 125.503 132.309 125.748C132.065 125.993 131.928 126.323 131.928 126.668V162.165C131.932 162.507 132.071 162.833 132.314 163.075C132.557 163.317 132.886 163.454 133.231 163.458H143.697C144.042 163.454 144.371 163.317 144.614 163.075C144.857 162.833 144.996 162.507 145 162.165V126.668C145 126.323 144.863 125.993 144.619 125.748C144.376 125.503 144.044 125.363 143.697 125.359H139.991V122.833C140.997 122.518 141.884 121.908 142.534 121.084C143.185 120.259 143.568 119.259 143.635 118.213C145.264 90.755 141.868 72.8602 133.37 64.96C130.951 62.527 127.706 61.0774 124.268 60.8944H98.4494C94.9912 61.0495 91.7213 62.5026 89.3005 64.96C82.7878 71.12 79.2523 83.1166 78.7095 100.904H82.7722C85.1508 100.899 87.4373 101.816 89.1454 103.46V103.46Z"
              fill="#5F5F5F"
            />
            <path
              d="M111.335 57.26C114.246 57.26 117.092 56.4024 119.513 54.7959C121.933 53.1893 123.819 50.9059 124.932 48.2346C126.046 45.5632 126.336 42.6239 125.767 39.7885C125.198 36.9532 123.795 34.3491 121.735 32.3058C119.676 30.2626 117.052 28.8719 114.197 28.3097C111.341 27.7475 108.382 28.0392 105.693 29.1477C103.004 30.2562 100.707 32.1318 99.0921 34.5371C97.477 36.9425 96.6165 39.7696 96.6196 42.6608C96.6196 44.5793 97.0003 46.4789 97.74 48.2512C98.4798 50.0235 99.564 51.6335 100.931 52.9894C102.297 54.3453 103.92 55.4203 105.705 56.1531C107.49 56.8859 109.404 57.262 111.335 57.26ZM119.089 47.2038C119.089 47.2038 114.979 59.9088 104.761 51.0538C104.652 51.0076 113.956 51.4542 119.042 47.1576L119.089 47.2038Z"
              fill="#5F5F5F"
            />
            <path
              d="M60.2257 177.195V179.906C60.2693 180.392 60.4949 180.845 60.8579 181.175C61.221 181.505 61.6952 181.688 62.1873 181.688C62.6794 181.688 63.1536 181.505 63.5167 181.175C63.8797 180.845 64.1052 180.392 64.1489 179.906V177.195H86.7419V179.906C86.7855 180.392 87.0111 180.845 87.3741 181.175C87.7371 181.505 88.2114 181.688 88.7035 181.688C89.1956 181.688 89.6698 181.505 90.0328 181.175C90.3959 180.845 90.6214 180.392 90.6651 179.906V177.195C92.0497 177.191 93.3765 176.643 94.3557 175.671C95.3348 174.698 95.8867 173.381 95.8908 172.005V130.225C95.8908 128.853 95.345 127.536 94.3721 126.561C93.3993 125.586 92.078 125.032 90.6961 125.02H89.3005V109.99C89.3046 109.135 89.1388 108.288 88.8128 107.497C88.4867 106.706 88.0067 105.986 87.4003 105.38C86.7939 104.773 86.073 104.291 85.2788 103.962C84.4847 103.633 83.6329 103.462 82.7722 103.46H68.1806C66.4504 103.464 64.7923 104.148 63.5689 105.363C62.3455 106.578 61.6564 108.225 61.6523 109.943V125.02H60.2257C58.8437 125.032 57.5225 125.586 56.5496 126.561C55.5768 127.536 55.031 128.853 55.031 130.225V172.005C55.035 173.375 55.5826 174.688 56.5551 175.66C57.5275 176.631 58.8464 177.183 60.2257 177.195ZM64.3349 109.99C64.339 108.957 64.7537 107.969 65.4885 107.239C66.2234 106.509 67.2189 106.097 68.2581 106.093H82.8498C83.889 106.097 84.8845 106.509 85.6193 107.239C86.3542 107.969 86.7688 108.957 86.7729 109.99V125.02H64.3349V109.99ZM60.5513 136.17H90.479V138.064H60.4738L60.5513 136.17Z"
              fill="#5F5F5F"
            />
          </g>
          <defs>
            <clipPath id="clip0_230:2">
              <rect width="90" height="154" fill="white" transform="translate(55 28)" />
            </clipPath>
          </defs>
        </svg>
        <span className={`${textSize()}`}>{propiedad?.huespedes}</span>
      </div>
      <div className="flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize()}
          height={iconSize()}
          viewBox="0 0 210 210"
          fill="none"
        >
          <path
            d="M27 27H182V182H121V170.925H130.718V160.964H137.293V170.925H170.925V118.719H137.293V137.326H130.718V112.144H170.925V38.0751H137.293V88.6705H130.718V38.0751H84.7583V71.6738H103.366V78.2489H78.1832V38.0751H38.0751V101.196H84.7583V126.379H78.1832V107.771H38.0751V170.925H78.1832V154.816H84.7583V170.925H93V182H27V27Z"
            fill="#5F5F5F"
          />
        </svg>
        <span className={`${textSize()}`}>{propiedad?.habitaciones}</span>
      </div>
      <div className="flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize()}
          height={iconSize()}
          viewBox="0 0 210 210"
          fill="none"
        >
          <g clipPath="url(#clip0_230:11)">
            <path
              d="M180.072 124.883V153.865C180.058 158.343 178.65 162.704 176.048 166.33C173.446 169.957 169.781 172.665 165.571 174.073L170.127 182.022C170.375 182.776 170.357 183.594 170.075 184.335C169.793 185.077 169.266 185.697 168.582 186.09C167.898 186.483 167.101 186.624 166.325 186.49C165.55 186.356 164.845 185.954 164.33 185.353L158.533 175.052H52.844L46.911 185.353C46.4626 186.082 45.7602 186.615 44.9421 186.847C44.124 187.079 43.2496 186.993 42.491 186.606C42.1052 186.394 41.7657 186.105 41.4931 185.757C41.2204 185.409 41.0202 185.009 40.9043 184.581C40.7884 184.153 40.7593 183.706 40.8187 183.266C40.8781 182.826 41.0248 182.403 41.25 182.022L45.5 174.348C41.0364 173.136 37.0922 170.474 34.2775 166.771C31.4627 163.069 29.9341 158.533 29.928 153.865V124.883H180.072ZM146.259 26.624C147.346 25.8985 148.483 25.2502 149.659 24.6839C151.863 23.8381 154.203 23.4131 156.561 23.4305C159.022 23.4319 161.459 23.924 163.732 24.8786C166.004 25.8332 168.068 27.2315 169.804 28.9933V28.9933C173.283 32.5665 175.262 37.3575 175.329 42.3681V104.812H183.319C185.061 104.856 186.72 105.573 187.954 106.816C189.187 108.058 189.902 109.732 189.949 111.491C189.949 113.267 189.25 114.97 188.007 116.226C186.764 117.482 185.077 118.187 183.319 118.187H26.63C24.8716 118.187 23.1852 117.482 21.9419 116.226C20.6985 114.97 20 113.267 20 111.491V111.491C20.0474 109.732 20.7616 108.058 21.9953 106.816C23.229 105.573 24.888 104.856 26.63 104.812H168.75V42.3681C168.722 39.1409 167.432 36.0556 165.163 33.7835V33.7835C162.915 31.4884 159.859 30.1858 156.663 30.1608C155.149 30.138 153.645 30.4242 152.243 31.0021C151.835 31.1395 151.41 31.4142 151.002 31.5515C152.939 34.6914 153.986 38.3082 154.028 42.0076C154.045 44.5164 153.566 47.0034 152.62 49.3234C151.675 51.6434 150.281 53.7498 148.52 55.5197C147.888 56.1285 147.048 56.4681 146.174 56.4681C145.3 56.4681 144.46 56.1285 143.828 55.5197L121.83 33.3199C121.504 33.0191 121.244 32.6531 121.066 32.2452C120.888 31.8373 120.796 31.3964 120.796 30.9506C120.796 30.5048 120.888 30.0639 121.066 29.656C121.244 29.2481 121.504 28.8821 121.83 28.5813C125.007 25.3749 129.211 23.4168 133.688 23.0581C138.165 22.6994 142.622 23.9636 146.259 26.624V26.624Z"
              fill="#5F5F5F"
            />
          </g>
          <defs>
            <clipPath id="clip0_230:11">
              <rect width="170" height="164" fill="white" transform="translate(20 23)" />
            </clipPath>
          </defs>
        </svg>
        <span className={`${textSize()}`}> {propiedad?.baños}</span>
      </div>
    </div>
  );
}

export default SizeDescription;
