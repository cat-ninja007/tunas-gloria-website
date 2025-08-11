export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,mdx}': ['prettier --write'],
  '!package-lock.json': [], // exclude lock
}