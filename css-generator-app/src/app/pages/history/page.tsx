import View from "./view";

const Page = (props:any) => {
  return (
    <div className="flex grid grid-cols-3 p-5 h-[40.3rem]">
      <View hour={props.hour} codeHtml={props.textValue} codeCss={props.styleCss}/>
    </div>
  );
};

export default Page;
