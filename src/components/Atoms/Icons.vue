<script setup lang="ts">
type IconsProps = {
  name:
    | "back"
    | "profile"
    | "search"
    | "clear"
    | "refresh"
    | "cloudy"
    | "partly-cloudy"
    | "rainy"
    | "night-storm"
    | "back-white"
    | "edit";
};

defineProps<IconsProps>();
</script>

<template>
  <svg
    v-if="name === 'back'"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.78799 12L14.798 18.01L16.212 16.596L11.612 11.996L16.212 7.39599L14.798 5.98999L8.78799 12Z"
      fill="white"
    />
  </svg>
  <svg
    v-if="name === 'clear'"
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99536 0C6.512 0 5.06196 0.439867 3.82859 1.26398C2.59522 2.08809 1.63393 3.25943 1.06627 4.62987C0.498611 6.00032 0.350086 7.50832 0.639475 8.96318C0.928864 10.418 1.64317 11.7544 2.69206 12.8033C3.74096 13.8522 5.07733 14.5665 6.53219 14.8559C7.98704 15.1453 9.49504 14.9968 10.8655 14.4291C12.2359 13.8614 13.4073 12.9001 14.2314 11.6668C15.0555 10.4334 15.4954 8.98336 15.4954 7.5C15.493 5.51159 14.7021 3.6053 13.2961 2.19928C11.8901 0.793263 9.98377 0.00233623 7.99536 0ZM7.99536 13.5C6.80868 13.5 5.64864 13.1481 4.66194 12.4888C3.67525 11.8295 2.90621 10.8925 2.45209 9.7961C1.99796 8.69974 1.87914 7.49334 2.11065 6.32946C2.34216 5.16557 2.91361 4.09647 3.75272 3.25736C4.59184 2.41824 5.66094 1.8468 6.82482 1.61529C7.98871 1.38378 9.19511 1.5026 10.2915 1.95672C11.3878 2.41085 12.3249 3.17988 12.9842 4.16658C13.6435 5.15327 13.9954 6.31331 13.9954 7.5C13.9935 9.09074 13.3608 10.6158 12.236 11.7406C11.1112 12.8655 9.58611 13.4982 7.99536 13.5ZM10.7756 4.71975C10.706 4.65009 10.6233 4.59483 10.5323 4.55713C10.4413 4.51943 10.3438 4.50002 10.2453 4.50002C10.1468 4.50002 10.0493 4.51943 9.95834 4.55713C9.86735 4.59483 9.78469 4.65009 9.71506 4.71975L7.99531 6.4395L6.27556 4.71975C6.20619 4.64895 6.12347 4.59261 6.03218 4.55398C5.9409 4.51535 5.84286 4.49521 5.74374 4.4947C5.64462 4.4942 5.54638 4.51335 5.45471 4.55105C5.36304 4.58876 5.27975 4.64426 5.20966 4.71435C5.13957 4.78444 5.08407 4.86773 5.04637 4.9594C5.00867 5.05107 4.98952 5.14931 4.99003 5.24843C4.99053 5.34755 5.01068 5.44559 5.04931 5.53687C5.08794 5.62816 5.14429 5.71088 5.21508 5.78025L6.93481 7.5L5.21506 9.21975C5.14504 9.2893 5.08944 9.37199 5.05145 9.46308C5.01345 9.55417 4.99381 9.65186 4.99365 9.75055C4.99349 9.84924 5.01281 9.947 5.0505 10.0382C5.0882 10.1294 5.14352 10.2123 5.21331 10.2821C5.2831 10.3519 5.36598 10.4072 5.45719 10.4449C5.54841 10.4826 5.64616 10.5019 5.74485 10.5017C5.84355 10.5015 5.94124 10.4819 6.03232 10.4439C6.1234 10.4059 6.20609 10.3503 6.27564 10.2802L7.99539 8.5605L9.71514 10.2802C9.8562 10.4188 10.0463 10.496 10.244 10.4951C10.4417 10.4942 10.6311 10.4153 10.7709 10.2755C10.9107 10.1357 10.9896 9.94631 10.9905 9.74859C10.9914 9.55088 10.9142 9.36082 10.7756 9.21975L9.05591 7.5L10.7757 5.78025C10.8453 5.71063 10.9006 5.62796 10.9383 5.53698C10.976 5.446 10.9954 5.34848 10.9953 5.25C10.9953 5.15151 10.9759 5.054 10.9382 4.96302C10.9005 4.87203 10.8453 4.78937 10.7756 4.71975H10.7756Z"
      fill="#8C939D"
    />
  </svg>
  <svg
    v-if="name === 'search'"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.3217 13.7612L11.2752 9.71464C12.215 8.50504 12.6584 6.98273 12.5151 5.45767C12.3719 3.93262 11.6527 2.5195 10.5041 1.50607C9.35555 0.492636 7.86387 -0.0449032 6.33285 0.00290559C4.80182 0.0507143 3.34659 0.680277 2.26346 1.7634C1.18033 2.84652 0.550757 4.30175 0.502937 5.83277C0.455118 7.3638 0.992647 8.85548 2.00607 10.0041C3.01949 11.1527 4.43261 11.8718 5.95766 12.0151C7.48272 12.1584 9.00504 11.715 10.2146 10.7752L14.2612 14.8218C14.402 14.9616 14.5925 15.0399 14.791 15.0396C14.9894 15.0393 15.1797 14.9603 15.32 14.8199C15.4603 14.6796 15.5393 14.4894 15.5396 14.2909C15.5399 14.0925 15.4616 13.902 15.3217 13.7612ZM2.04148 6.04146C2.04148 5.15144 2.3054 4.28141 2.79986 3.54139C3.29433 2.80137 3.99713 2.22459 4.8194 1.884C5.64167 1.5434 6.54647 1.45429 7.41938 1.62792C8.2923 1.80156 9.09412 2.23014 9.72346 2.85948C10.3528 3.48881 10.7814 4.29064 10.955 5.16355C11.1286 6.03646 11.0395 6.94126 10.6989 7.76353C10.3583 8.5858 9.78156 9.2886 9.04154 9.78307C8.30152 10.2775 7.43149 10.5415 6.54148 10.5415C5.3484 10.5402 4.20457 10.0656 3.36093 9.222C2.5173 8.37837 2.04278 7.23453 2.04148 6.04146Z"
      fill="#8C939D"
    />
  </svg>

  <svg
    v-if="name === 'profile'"
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 10C8.98891 10 9.95561 9.70676 10.7779 9.15735C11.6001 8.60794 12.241 7.82705 12.6194 6.91342C12.9978 5.99979 13.0969 4.99446 12.9039 4.02455C12.711 3.05465 12.2348 2.16373 11.5355 1.46447C10.8363 0.765206 9.94536 0.289002 8.97545 0.0960759C8.00555 -0.0968503 7.00021 0.00216642 6.08658 0.380605C5.17295 0.759043 4.39206 1.39991 3.84265 2.22215C3.29324 3.0444 3 4.0111 3 5C3.00156 6.32561 3.52884 7.59647 4.46618 8.53382C5.40353 9.47116 6.6744 9.99845 8 10ZM8 2C8.59334 2 9.17336 2.17595 9.66671 2.50559C10.1601 2.83524 10.5446 3.30377 10.7716 3.85195C10.9987 4.40013 11.0581 5.00333 10.9424 5.58527C10.8266 6.16722 10.5409 6.70177 10.1213 7.12132C9.70176 7.54088 9.16721 7.8266 8.58527 7.94236C8.00333 8.05811 7.40013 7.9987 6.85195 7.77164C6.30377 7.54458 5.83524 7.16006 5.50559 6.66671C5.17595 6.17337 5 5.59335 5 5C5.00087 4.20462 5.31722 3.44206 5.87964 2.87964C6.44206 2.31722 7.20462 2.00087 8 2ZM10.2324 12H5.76758C4.23844 12.0017 2.7724 12.6099 1.69113 13.6911C0.60986 14.7724 0.00167022 16.2384 0 17.7676V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20C1.26522 20 1.51957 19.8946 1.70711 19.7071C1.89464 19.5196 2 19.2652 2 19V17.7676C2.00115 16.7687 2.39846 15.8111 3.10477 15.1048C3.81108 14.3985 4.76871 14.0012 5.76758 14H10.2324C11.2313 14.0012 12.1888 14.3986 12.8951 15.1049C13.6014 15.8112 13.9988 16.7687 14 17.7676V19C14 19.2652 14.1054 19.5196 14.2929 19.7071C14.4804 19.8946 14.7348 20 15 20C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V17.7676C15.9984 16.2384 15.3902 14.7723 14.309 13.691C13.2277 12.6098 11.7616 12.0016 10.2324 12Z"
      fill="#2E3A5A"
    />
  </svg>

  <svg
    v-if="name === 'refresh'"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99666 2.66666C5.22415 2.66287 2.91111 4.78398 2.67534 7.54646C2.43957 10.3089 4.35971 12.7913 7.09277 13.2574C9.82583 13.7235 12.4602 12.0178 13.1533 9.33333H11.766C11.0879 11.2514 9.07802 12.3549 7.09564 11.8976C5.11327 11.4403 3.78993 9.56791 4.02054 7.54659C4.25115 5.52527 5.96223 3.99903 7.99666 3.99999C9.05636 4.00155 10.0709 4.42919 10.812 5.18667L8.66666 7.33333H13.3333V2.66666L11.766 4.23333C10.7685 3.22975 9.41166 2.66581 7.99666 2.66666Z"
      fill="white"
    />
  </svg>

  <svg
    v-if="name === 'cloudy'"
    width="133"
    height="144"
    viewBox="0 0 133 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <foreignObject x="29.3795" y="40" width="96.5692" height="87.7949"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        style="
          backdrop-filter: blur(8px);
          clip-path: url(#bgblur_0_1_2168_clip_path);
          height: 100%;
          width: 100%;
        "
      ></div
    ></foreignObject>
    <g filter="url(#filter0_di_1_2168)" data-figma-bg-blur-radius="16">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M68.2205 79.7933C68.1711 79.7943 68.1215 79.7949 68.0718 79.7949C64.3757 79.7949 61.3795 76.7986 61.3795 73.1026C61.3795 70.5943 62.7594 68.4083 64.8015 67.2624C64.8005 67.2015 64.8 67.1406 64.8 67.0795C64.8 60.9605 69.7605 56 75.8795 56C81.1577 56 85.5738 59.6908 86.6878 64.6324C90.7265 64.802 93.9487 68.1298 93.9487 72.2103C93.9487 76.3991 90.553 79.7949 86.3641 79.7949H68.2205V79.7933Z"
        fill="url(#paint0_radial_1_2168)"
        fill-opacity="0.77"
      />
    </g>
    <g style="mix-blend-mode: soft-light" filter="url(#filter1_di_1_2168)">
      <circle cx="68.0718" cy="73.1026" r="6.69231" fill="#848484" />
    </g>
    <g opacity="0.54" filter="url(#filter2_f_1_2168)">
      <ellipse
        cx="71.1949"
        cy="72.5821"
        rx="6.84103"
        ry="6.32051"
        fill="#FBFBFB"
      />
      <ellipse
        cx="77.7385"
        cy="68.4923"
        rx="8.92308"
        ry="9.51795"
        fill="#FBFBFB"
      />
      <ellipse
        cx="89.6359"
        cy="66.7821"
        rx="6.84103"
        ry="6.32051"
        fill="#FBFBFB"
      />
      <ellipse
        cx="66.9564"
        cy="77.6385"
        rx="7.95641"
        ry="7.36154"
        fill="#FBFBFB"
      />
      <ellipse
        cx="64.2795"
        cy="79.0513"
        rx="4.5359"
        ry="4.1641"
        fill="#FBFBFB"
      />
    </g>
    <defs>
      <filter
        id="filter0_di_1_2168"
        x="29.3795"
        y="40"
        width="96.5692"
        height="87.7949"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="16" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2168"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2168"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="2" />
        <feGaussianBlur stdDeviation="7" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1_2168"
        />
      </filter>
      <clipPath
        id="bgblur_0_1_2168_clip_path"
        transform="translate(-29.3795 -40)"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68.2205 79.7933C68.1711 79.7943 68.1215 79.7949 68.0718 79.7949C64.3757 79.7949 61.3795 76.7986 61.3795 73.1026C61.3795 70.5943 62.7594 68.4083 64.8015 67.2624C64.8005 67.2015 64.8 67.1406 64.8 67.0795C64.8 60.9605 69.7605 56 75.8795 56C81.1577 56 85.5738 59.6908 86.6878 64.6324C90.7265 64.802 93.9487 68.1298 93.9487 72.2103C93.9487 76.3991 90.553 79.7949 86.3641 79.7949H68.2205V79.7933Z"
        />
      </clipPath>
      <filter
        id="filter1_di_1_2168"
        x="53.3795"
        y="50.4103"
        width="43.3846"
        height="41.3846"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-10" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2168"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2168"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="22" dy="12" />
        <feGaussianBlur stdDeviation="11" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1_2168"
        />
      </filter>
      <filter
        id="filter2_f_1_2168"
        x="0.175629"
        y="0.14999"
        width="155.126"
        height="143.674"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="29.4122"
          result="effect1_foregroundBlur_1_2168"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1_2168"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(72.8552 61.0734) rotate(90.6693) scale(18.713 21.354)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#2094FF" />
      </radialGradient>
    </defs>
  </svg>

  <svg
    v-if="name === 'rainy'"
    width="91"
    height="84"
    viewBox="0 0 91 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <foreignObject x="0" y="0" width="90.6645" height="83.4809"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        style="
          backdrop-filter: blur(8px);
          clip-path: url(#bgblur_0_1_2212_clip_path);
          height: 100%;
          width: 100%;
        "
      ></div
    ></foreignObject>
    <g filter="url(#filter0_di_1_2212)" data-figma-bg-blur-radius="16">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M52.455 35.4809H37.6008V35.4796C37.5603 35.4805 37.5197 35.4809 37.479 35.4809C34.453 35.4809 32 33.0279 32 30.0019C32 27.9484 33.1297 26.1587 34.8016 25.2205C34.8008 25.1707 34.8004 25.1208 34.8004 25.0708C34.8004 20.0611 38.8615 16 43.8712 16C48.1924 16 51.8079 19.0217 52.72 23.0674C56.0265 23.2062 58.6645 25.9307 58.6645 29.2714C58.6645 32.5782 56.0796 35.2813 52.8202 35.4703V35.4809H52.455Z"
        fill="url(#paint0_radial_1_2212)"
        fill-opacity="0.77"
      />
    </g>
    <g style="mix-blend-mode: soft-light" filter="url(#filter1_di_1_2212)">
      <circle cx="37.479" cy="30.0019" r="5.47901" fill="#848484" />
    </g>
    <path
      d="M41.8707 38.3896C41.9848 38.2819 42.1728 38.3499 42.1905 38.5053L42.3346 39.7704C42.4041 40.3809 41.8051 40.8528 41.2265 40.6434C40.6479 40.4341 40.4942 39.6899 40.9422 39.2667L41.8707 38.3896Z"
      fill="#00D0E2"
    />
    <path
      d="M45.4017 38.3896C45.5157 38.2819 45.7037 38.3499 45.7214 38.5053L45.8655 39.7704C45.9351 40.3809 45.3361 40.8528 44.7574 40.6434C44.1788 40.4341 44.0251 39.6899 44.4732 39.2667L45.4017 38.3896Z"
      fill="#00D0E2"
    />
    <path
      d="M49.1761 38.3896C49.2901 38.2819 49.4782 38.3499 49.4959 38.5053L49.64 39.7704C49.7095 40.3809 49.1105 40.8528 48.5319 40.6434C47.9533 40.4341 47.7996 39.6899 48.2476 39.2667L49.1761 38.3896Z"
      fill="#00D0E2"
    />
    <path
      d="M43.0882 42.2875C43.202 42.1798 43.39 42.2481 43.4078 42.4036L43.5531 43.67C43.6232 44.2811 43.0253 44.7528 42.4469 44.5426C41.8686 44.3325 41.7143 43.5875 42.1614 43.1644L43.0882 42.2875Z"
      fill="#00D0E2"
    />
    <path
      d="M46.6191 42.2875C46.7329 42.1798 46.9209 42.2481 46.9387 42.4036L47.084 43.67C47.1542 44.2811 46.5562 44.7528 45.9779 44.5426C45.3995 44.3325 45.2452 43.5875 45.6924 43.1644L46.6191 42.2875Z"
      fill="#00D0E2"
    />
    <defs>
      <filter
        id="filter0_di_1_2212"
        x="0"
        y="0"
        width="90.6645"
        height="83.4809"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="16" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2212"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2212"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="2" />
        <feGaussianBlur stdDeviation="7" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1_2212"
        />
      </filter>
      <clipPath id="bgblur_0_1_2212_clip_path" transform="translate(0 0)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M52.455 35.4809H37.6008V35.4796C37.5603 35.4805 37.5197 35.4809 37.479 35.4809C34.453 35.4809 32 33.0279 32 30.0019C32 27.9484 33.1297 26.1587 34.8016 25.2205C34.8008 25.1707 34.8004 25.1208 34.8004 25.0708C34.8004 20.0611 38.8615 16 43.8712 16C48.1924 16 51.8079 19.0217 52.72 23.0674C56.0265 23.2062 58.6645 25.9307 58.6645 29.2714C58.6645 32.5782 56.0796 35.2813 52.8202 35.4703V35.4809H52.455Z"
        />
      </clipPath>
      <filter
        id="filter1_di_1_2212"
        x="24"
        y="8.5229"
        width="40.958"
        height="38.958"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-10" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2212"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2212"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="22" dy="12" />
        <feGaussianBlur stdDeviation="11" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1_2212"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1_2212"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(41.3952 20.1536) rotate(90.6693) scale(15.3203 17.4826)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#2094FF" />
      </radialGradient>
    </defs>
  </svg>

  <svg
    v-if="name === 'partly-cloudy'"
    width="120"
    height="105"
    viewBox="0 0 120 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_i_1_2141)">
      <circle cx="71.8227" cy="24.2345" r="18.1095" fill="#FFAB0B" />
    </g>
    <foreignObject x="0.875" y="0.544128" width="118.328" height="103.692"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        style="
          backdrop-filter: blur(8px);
          clip-path: url(#bgblur_0_1_2141_clip_path);
          height: 100%;
          width: 100%;
        "
      ></div
    ></foreignObject>
    <g filter="url(#filter1_di_1_2141)" data-figma-bg-blur-radius="16">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.2864 56.2334C44.204 56.2352 44.1213 56.2361 44.0384 56.2361C37.873 56.2361 32.875 51.2381 32.875 45.0727C32.875 40.8887 35.1768 37.2423 38.5831 35.3308C38.5815 35.2293 38.5807 35.1276 38.5807 35.0257C38.5807 24.8186 46.8552 16.5441 57.0623 16.5441C65.8667 16.5441 73.2332 22.7008 75.0915 30.9438C81.8285 31.2267 87.2033 36.7778 87.2033 43.5843C87.2033 50.5717 81.5389 56.2361 74.5515 56.2361C74.3854 56.2361 74.22 56.2329 74.0554 56.2266V56.2361H44.2864V56.2334Z"
        fill="url(#paint0_radial_1_2141)"
        fill-opacity="0.77"
      />
    </g>
    <g style="mix-blend-mode: soft-light" filter="url(#filter2_di_1_2141)">
      <circle cx="44.0384" cy="45.0727" r="11.1634" fill="#848484" />
    </g>
    <path
      d="M57.5919 62.1626C57.8243 61.9431 58.2074 62.0817 58.2435 62.3983L58.5371 64.9759C58.6788 66.2197 57.4583 67.1812 56.2794 66.7547C55.1005 66.3282 54.7873 64.8118 55.7001 63.9496L57.5919 62.1626Z"
      fill="#00D0E2"
    />
    <path
      d="M64.7861 62.1626C65.0185 61.9431 65.4016 62.0817 65.4376 62.3983L65.7312 64.9759C65.8729 66.2197 64.6525 67.1812 63.4735 66.7547C62.2946 66.3282 61.9815 64.8118 62.8943 63.9496L64.7861 62.1626Z"
      fill="#00D0E2"
    />
    <path
      d="M72.4764 62.1626C72.7088 61.9431 73.0919 62.0817 73.128 62.3983L73.4216 64.9759C73.5632 66.2197 72.3428 67.1812 71.1639 66.7547C69.9849 66.3282 69.6718 64.8118 70.5846 63.9496L72.4764 62.1626Z"
      fill="#00D0E2"
    />
    <path
      d="M60.0724 70.1044C60.3044 69.8849 60.6873 70.024 60.7237 70.341L61.0197 72.9212C61.1626 74.1662 59.9443 75.1273 58.7659 74.6992C57.5876 74.271 57.2731 72.753 58.1842 71.891L60.0724 70.1044Z"
      fill="#00D0E2"
    />
    <path
      d="M67.2666 70.1044C67.4986 69.8849 67.8815 70.024 67.9179 70.341L68.2139 72.9212C68.3568 74.1662 67.1385 75.1273 65.9601 74.6992C64.7818 74.271 64.4673 72.753 65.3784 71.891L67.2666 70.1044Z"
      fill="#00D0E2"
    />
    <defs>
      <filter
        id="filter0_i_1_2141"
        x="43.7133"
        y="6.125"
        width="46.2189"
        height="49.2189"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-10" dy="13" />
        <feGaussianBlur stdDeviation="12" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.886275 0 0 0 0 0 0 0 0 0.9 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1_2141"
        />
      </filter>
      <filter
        id="filter1_di_1_2141"
        x="0.875"
        y="0.544128"
        width="118.328"
        height="103.692"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="16" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2141"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2141"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="2" />
        <feGaussianBlur stdDeviation="7" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1_2141"
        />
      </filter>
      <clipPath
        id="bgblur_0_1_2141_clip_path"
        transform="translate(-0.875 -0.544128)"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44.2864 56.2334C44.204 56.2352 44.1213 56.2361 44.0384 56.2361C37.873 56.2361 32.875 51.2381 32.875 45.0727C32.875 40.8887 35.1768 37.2423 38.5831 35.3308C38.5815 35.2293 38.5807 35.1276 38.5807 35.0257C38.5807 24.8186 46.8552 16.5441 57.0623 16.5441C65.8667 16.5441 73.2332 22.7008 75.0915 30.9438C81.8285 31.2267 87.2033 36.7778 87.2033 43.5843C87.2033 50.5717 81.5389 56.2361 74.5515 56.2361C74.3854 56.2361 74.22 56.2329 74.0554 56.2266V56.2361H44.2864V56.2334Z"
        />
      </clipPath>
      <filter
        id="filter2_di_1_2141"
        x="24.875"
        y="17.9094"
        width="52.3267"
        height="50.3267"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-10" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2141"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2141"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="22" dy="12" />
        <feGaussianBlur stdDeviation="11" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1_2141"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1_2141"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(52.0176 25.0071) rotate(90.6693) scale(31.2149 35.6204)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#99CEFF" />
      </radialGradient>
    </defs>
  </svg>

  <svg
    v-if="name === 'night-storm'"
    width="89"
    height="83"
    viewBox="0 0 89 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M53.8889 17.4444L54.4923 18.6188L55.6667 19.2222L54.4923 19.8256L53.8889 21L53.2855 19.8256L52.1111 19.2222L53.2855 18.6188L53.8889 17.4444Z"
      fill="#FFDE41"
    />
    <path
      d="M49.8889 14L50.266 14.734L51 15.1111L50.266 15.4882L49.8889 16.2222L49.5118 15.4882L48.7778 15.1111L49.5118 14.734L49.8889 14Z"
      fill="#FFDE41"
    />
    <foreignObject x="0" y="0.555555" width="88.3333" height="81.7778"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        style="
          backdrop-filter: blur(8px);
          clip-path: url(#bgblur_0_1_2233_clip_path);
          height: 100%;
          width: 100%;
        "
      ></div
    ></foreignObject>
    <g filter="url(#filter0_di_1_2233)" data-figma-bg-blur-radius="16">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.1111 34.3321C37.0742 34.3329 37.0371 34.3333 37 34.3333C34.2386 34.3333 32 32.0948 32 29.3333C32 27.4593 33.031 25.8261 34.5567 24.97C34.5559 24.9245 34.5556 24.879 34.5556 24.8333C34.5556 20.2616 38.2616 16.5556 42.8333 16.5556C46.7768 16.5556 50.0762 19.3131 50.9085 23.0051C53.926 23.1318 56.3333 25.6181 56.3333 28.6667C56.3333 31.7963 53.7963 34.3333 50.6667 34.3333L37.1111 34.3333V34.3321Z"
        fill="url(#paint0_radial_1_2233)"
        fill-opacity="0.77"
      />
    </g>
    <g style="mix-blend-mode: soft-light" filter="url(#filter1_di_1_2233)">
      <circle cx="37" cy="29.3333" r="5" fill="#848484" />
    </g>
    <path
      d="M42.1257 37.1706L42.5556 34.3333H45.6667L45.1262 36.5852C45.0619 36.8533 45.2651 37.1111 45.5408 37.1111C45.8805 37.1111 46.0838 37.489 45.8966 37.7724L42.4444 43L43.5359 38.9072C43.658 38.4493 43.3128 38 42.8389 38C42.3974 38 42.0595 37.6071 42.1257 37.1706Z"
      fill="url(#paint1_linear_1_2233)"
    />
    <mask
      id="mask0_1_2233"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="32"
      y="16"
      width="25"
      height="19"
    >
      <foreignObject x="24" y="8.33333" width="40" height="38"
        ><div
          xmlns="http://www.w3.org/1999/xhtml"
          style="
            backdrop-filter: blur(8px);
            clip-path: url(#bgblur_1_1_2233_clip_path);
            height: 100%;
            width: 100%;
          "
        ></div
      ></foreignObject>
      <path
        data-figma-bg-blur-radius="16"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.1111 34.3321C37.0742 34.3329 37.0371 34.3333 37 34.3333C34.2386 34.3333 32 32.0948 32 29.3333C32 27.4593 33.031 25.8261 34.5567 24.97C34.5559 24.9245 34.5556 24.879 34.5556 24.8333C34.5556 20.2616 38.2616 16.5556 42.8333 16.5556C46.7768 16.5556 50.0762 19.3131 50.9085 23.0051C53.926 23.1318 56.3333 25.6181 56.3333 28.6667C56.3333 31.7963 53.7963 34.3333 50.6667 34.3333C50.5171 34.3333 50.3689 34.3275 50.2222 34.3162V34.3333H37.1111V34.3321Z"
        fill="url(#paint2_radial_1_2233)"
        fill-opacity="0.77"
      />
    </mask>
    <g mask="url(#mask0_1_2233)">
      <g filter="url(#filter2_f_1_2233)">
        <path
          d="M43.8889 30.1111C40.9494 32.2754 38.2794 33.7784 36.5556 34.3333H51.7778C49.927 34.3333 46.021 31.3945 43.8889 30.1111Z"
          fill="url(#paint3_radial_1_2233)"
        />
      </g>
      <g style="mix-blend-mode: screen" filter="url(#filter3_f_1_2233)">
        <path
          d="M44.5556 28.2222C42.6983 29.2859 40.0892 34.2828 39 34.5556H50.1111C48.9417 34.5556 45.9027 28.8529 44.5556 28.2222Z"
          fill="url(#paint4_linear_1_2233)"
        />
      </g>
      <g style="mix-blend-mode: screen" filter="url(#filter4_f_1_2233)">
        <path
          d="M44 29.5556C42.7535 30.2669 40.9532 34.3732 40.2222 34.5556L47.6667 34.3333C46.8818 34.3333 44.9041 29.9773 44 29.5556Z"
          fill="url(#paint5_linear_1_2233)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_di_1_2233"
        x="0"
        y="0.555555"
        width="88.3333"
        height="81.7778"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="16" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2233"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2233"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="2" />
        <feGaussianBlur stdDeviation="7" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1_2233"
        />
      </filter>
      <clipPath
        id="bgblur_0_1_2233_clip_path"
        transform="translate(0 -0.555555)"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37.1111 34.3321C37.0742 34.3329 37.0371 34.3333 37 34.3333C34.2386 34.3333 32 32.0948 32 29.3333C32 27.4593 33.031 25.8261 34.5567 24.97C34.5559 24.9245 34.5556 24.879 34.5556 24.8333C34.5556 20.2616 38.2616 16.5556 42.8333 16.5556C46.7768 16.5556 50.0762 19.3131 50.9085 23.0051C53.926 23.1318 56.3333 25.6181 56.3333 28.6667C56.3333 31.7963 53.7963 34.3333 50.6667 34.3333L37.1111 34.3333V34.3321Z"
        />
      </clipPath>
      <filter
        id="filter1_di_1_2233"
        x="24"
        y="8.33333"
        width="40"
        height="38"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-10" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2233"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2233"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="22" dy="12" />
        <feGaussianBlur stdDeviation="11" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1_2233"
        />
      </filter>
      <clipPath
        id="bgblur_1_1_2233_clip_path"
        transform="translate(-24 -8.33333)"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37.1111 34.3321C37.0742 34.3329 37.0371 34.3333 37 34.3333C34.2386 34.3333 32 32.0948 32 29.3333C32 27.4593 33.031 25.8261 34.5567 24.97C34.5559 24.9245 34.5556 24.879 34.5556 24.8333C34.5556 20.2616 38.2616 16.5556 42.8333 16.5556C46.7768 16.5556 50.0762 19.3131 50.9085 23.0051C53.926 23.1318 56.3333 25.6181 56.3333 28.6667C56.3333 31.7963 53.7963 34.3333 50.6667 34.3333C50.5171 34.3333 50.3689 34.3275 50.2222 34.3162V34.3333H37.1111V34.3321Z"
        />
      </clipPath>
      <filter
        id="filter2_f_1_2233"
        x="28.5556"
        y="22.1111"
        width="31.2222"
        height="20.2222"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="4"
          result="effect1_foregroundBlur_1_2233"
        />
      </filter>
      <filter
        id="filter3_f_1_2233"
        x="35"
        y="24.2222"
        width="19.1111"
        height="14.3333"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="2"
          result="effect1_foregroundBlur_1_2233"
        />
      </filter>
      <filter
        id="filter4_f_1_2233"
        x="36.2222"
        y="25.5556"
        width="15.4444"
        height="13"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="2"
          result="effect1_foregroundBlur_1_2233"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1_2233"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(40.5738 20.346) rotate(90.6693) scale(13.9809 15.9541)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#99CEFF" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_1_2233"
        x1="44.4519"
        y1="34.3333"
        x2="44.4519"
        y2="40.1111"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E2BC38" />
        <stop offset="0.146666" stop-color="#FFE244" />
      </linearGradient>
      <radialGradient
        id="paint2_radial_1_2233"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(40.5738 20.346) rotate(90.6693) scale(13.9809 15.9541)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#2094FF" />
      </radialGradient>
      <radialGradient
        id="paint3_radial_1_2233"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(45.321 33.8651) rotate(-90) scale(2.39326 12.3638)"
      >
        <stop stop-color="#FFDE41" />
        <stop offset="1" stop-color="#FFD200" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint4_linear_1_2233"
        x1="44.8542"
        y1="34.432"
        x2="44.8542"
        y2="33.6158"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFDE41" />
        <stop offset="1" stop-color="#FFD200" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_1_2233"
        x1="44.1513"
        y1="34.4694"
        x2="44.1513"
        y2="33.3419"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFDE41" />
        <stop offset="1" stop-color="#FFD200" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>

  <svg
    v-if="name === 'back-white'"
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.288025 5.99999L6.29802 12.01L7.71202 10.596L3.11202 5.99599L7.71202 1.39599L6.29802 -0.0100098L0.288025 5.99999Z"
      fill="black"
    />
  </svg>

  <svg
    v-if="name === 'edit'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1_1989)">
      <path
        d="M6.414 16L16.556 5.85801L15.142 4.44401L5 14.586V16H6.414ZM7.243 18H3V13.757L14.435 2.32201C14.6225 2.13454 14.8768 2.02922 15.142 2.02922C15.4072 2.02922 15.6615 2.13454 15.849 2.32201L18.678 5.15101C18.8655 5.33853 18.9708 5.59284 18.9708 5.85801C18.9708 6.12317 18.8655 6.37748 18.678 6.56501L7.243 18ZM3 20H21V22H3V20Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1989">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
