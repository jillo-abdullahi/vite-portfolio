import { SlideMeIn } from "../shared/slideMeIn";
import Stacks from "../Stacks";

export const MyStacks = () => {
  return (
    <section
      id="stacks"
      className="border-0"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundAttachment: "fixed",
        background:
          'url("./src/assets/icon-stacks-bg.svg") no-repeat center center',
        backgroundSize: "cover",
      }}
    >
      <div className="mb-1 mt-20">
        {/* <SectionHeading
          heading={"My"}
          subHeading={"tools of trade"}
          id="stack"
        /> */}
      </div>
      <SlideMeIn>
        <div className="description w-full max-w-4xl pb-2">
          <p className="text-base text-gray-300 text-center">
            I work hard to improve my skills regularly.
          </p>
        </div>
      </SlideMeIn>
      <Stacks />
    </section>
  );
};
