/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fluent 2 combobox does not seem to work in strict mode 
  // https://react.fluentui.dev/iframe.html?viewMode=docs&id=concepts-developer-quick-start--docs#strict-mode
  reactStrictMode: false, 
};

export default nextConfig;
