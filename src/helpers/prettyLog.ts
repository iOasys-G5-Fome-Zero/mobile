export default function prettyLog(obj: any) {
  console.log(JSON.stringify(obj, null, 2));
}
