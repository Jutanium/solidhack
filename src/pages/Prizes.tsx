import { Component } from "solid-js";

const Prizes: Component = () => {
  return (
    <div class="pt-14 flex flex-col items-center gap-6 md:gap-8 lg:gap-12 bg-hack bg-no-repeat bg-top bg-contain">
      {" "}
      <div class="text-solid-medium px-5 max-w-3xl">
        The following is a list of the SolidHack 2022 competition categories. A
        project may only be submitted to one category at a time.
      </div>
      <div class="w-ful items-center flex flex-col pb-8 px-10">
        <div class="max-w-3xl border divide-y rounded-xl">
          <div class="md:grid md:gap-8 md:grid-cols-12 p-10">
            <div class="col-span-3 text-3xl flex justify-center mb-5">
              <figure class="bg-solid-medium rounded-full w-32 h-32 flex p-2">
                <img alt="Award" src="/img/award-best-app.svg" />
              </figure>
            </div>
            <div class="col-span-9 text-md">
              <h2 class="text-xl mb-2 font-semibold">Best App Award</h2>
              Build a consumer-grade application that solves a problem,
              entertains or informs. Your project will be judged on technical
              complexity, use of SolidJS and general use or entertainment to the
              users.
              <div class="mt-5">Prize: $5000</div>
            </div>
          </div>
          <div class="md:grid md:gap-8 md:grid-cols-12 p-10">
            <div class="col-span-3 text-3xl flex justify-center mb-5">
              <figure class="bg-solid-medium rounded-full w-32 h-32 flex p-2">
                <img alt="Award" src="/img/award-ecosystem.svg" />
              </figure>
            </div>
            <div class="col-span-9 text-md">
              <h2 class="text-xl mb-2 font-semibold">
                Best Ecosystem Utility Award
              </h2>
              Create a utility or package, or port an existing library. The
              SolidJS community is hungry for ecosystem solutions. This is your
              opportunity to show off your front-end and tooling abilities.
              <div class="mt-5">Prize: $5000</div>
            </div>
          </div>
          <div class="md:grid md:gap-8 md:grid-cols-12 p-10">
            <div class="col-span-3 text-3xl flex justify-center mb-5">
              <figure class="bg-solid-medium rounded-full w-32 h-32 flex p-2">
                <img alt="Award" src="/img/award-student-project.svg" />
              </figure>
            </div>
            <div class="col-span-9 text-md">
              <h2 class="text-xl mb-2 font-semibold">
                Best Student Project Award
              </h2>
              We didn't forget about students! Create a consumer-grade app or
              ecosystem utility. This award is for currently enrolled students
              itching to break into OSS and the corporate world.
              <div class="mt-5">
                Prize: $2000 + Internship Opportunity with{" "}
                <a class="underline" href="http://402.so">
                  402
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
