import View from "./view";

const Page = () => {
  const ho = "10:00pm"
  const sty = "vistaVy"
  const html = "<button>"
  const css = ".button{}"
  return (
    <div className="flex grid grid-cols-3 p-5">
      <View hour={ho} style={sty} codeHtml={html} codeCss={css}/>
    </div>
  );
};

export default Page;
