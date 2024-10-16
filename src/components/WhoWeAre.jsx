import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services";

const WhoWeAre = () => {
  return (
    <Section id="who_we_are">
      <div className="container">
        <Heading
          title="Protect your online business with us. Who are we and how can we help you?"
          text="Stay Safe Online: Learn How"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h2 className="h4 mb-4">A customized strategy for every project, supported by a dedicated team.</h2>
              <p className="body-2 mb-[3rem] text-n-3">
              Custom solutions for every project, supported by a dedicated team, ensure alignment with unique goals and requirements, optimizing both effectiveness and efficiency.</p>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Capability to perform in any format: black box, grey box, or white box testing.</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Flexible testing approaches: black box, grey box, and white box. Our expert team delivers comprehensive security assessments for every project.</p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Rapid response to vulnerabilities.</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                We promptly report critical and high-level vulnerabilities during the testing process and provide consultations for effective remediation.</p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default WhoWeAre;
