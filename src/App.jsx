function App() {
  const financeOnline = [
    { text: "Your personalized website", img: "mobile.png" },
    {
      text: "Your personalized online/QR code offline marketing material",
      img: "mobile.png",
    },
    { text: "One app to manage all your customers", img: "mobile.png" },
    { text: "App in 5 different languages", img: "mobile.png" },
  ];

  const trust = [
    {
      head: "Thousands of Partners",
      desc: "across 1000+ small towns and cities",
      img: "",
    },
    { head: "Upto Rs. 50,000/-", desc: "Income/month", img: "" },
    { head: "Weekly payments", desc: "4 times in a month", img: "" },
    {
      head: "Finance ki online dukaan app",
      desc: "reach your customers online and offline",
      img: "",
    },
  ];

  const earn = [
    { type: "Loan agents", img: "agent.png" },
    { type: "Former bank employee", img: "bank-employee.png" },
    { type: "Insurance agents", img: "ins-agent.png" },
    { type: "Wealth advisors", img: "piggy.png" },
    { type: "BFSI professionals", img: "bfsi.png" },
  ];

  const grow = [
    {
      heading: "Get certified",
      desc: "Learn from a series of video courses and webinars to become an expert in our financial products",
    },
    {
      heading: "Acquire customers",
      desc: "Use your personalized website and online/offline marketing materials to grow your customers base",
    },
    {
      heading: "Sell financial products",
      desc: "Advise and sell our financial products to customers and earn the industry’s leading commissions",
    },
  ];

  const success = [
    {
      img: "product.png",
      heading: "Customized products",
      desc: "Especially created for people that traditional finance institution do not serve",
    },
    {
      img: "demand.png",
      heading: "Huge unmet demand",
      desc: "300Mn customers and their families in small towns across India",
    },
    {
      img: "commision.png",
      heading: "Great commissions",
      desc: "Enjoy the industry’s leading commissions",
    },
    {
      img: "payment.png",
      heading: "7-day payment cycle",
      desc: "Your earnings credited 4 times in a month!",
    },
    {
      img: "customer.png",
      heading: "Own your customers",
      desc: "We don’t sell directly to customers",
    },
    {
      img: "app.png",
      heading: "App in your language",
      desc: "5 languages to choose from",
    },
  ];
  const partner = [
    {
      desc: "I joined WeRize 5 months ago. The app is very user friendly and the personalized website and marketing features helped me get more customers. The partner support team is very supportive and cooperative as well. All my queries have been resolved by them quickly. ",
      name: "Aakash Saxena",
      tag: "Trisaran Certified Partner",
      image: "Aakash.png",
    },
    {
      desc: "I feel proud to be a WeRize Partner. This job has earned me respect in society. Also I am very happy to help people when they are in financial difficulties. The appreciation that I get from my customers motivates me to always do my best.",
      name: "Sanjay Yadav",
      tag: "Trisaran Certified Partner",
      image: "Sanjay.png",
    },
    {
      desc: "I am glad that I chose to associate myself with WeRize. They have some unique financial products and selling those to people in need makes me very happy because through WeRize I could make an impact in people’s lives. They have the best commissions in the market.",
      name: "Vinay Chandra",
      tag: "Trisaran Certified Partner",
      image: "Vinay.png",
    },
  ];

  return (
    <div className="h-screen w-screen overflow-y-scroll">
      <div className="px-[25px] pt-[50px] lg:px-[74px] lg:pt-[88px] max-w-[1300px] w-full flex mx-auto relative">
        <div className="flex flex-col items-center lg:items-start w-full ">
          <h3 className="text-[25px] md:text-[35px] font-medium w-fit text-center lg:text-start ">
            Aapki apni finance ki dukaan
          </h3>
          <div className="h-[6px] w-[80px] bg-[#4eb543]  my-[15px] "></div>
          <div className="max-w-[600px] text-sm md:text-base lg:text-start text-center text-[#707070]">
            Sell financial products created especially for the 300Mn underserved
            lower middle income salaried employees and their families, and help
            them achieve their financial goals
          </div>
          <div className="text-center lg:text-start text-[14px] text-[#414141] mt-5">
            Finance ki online dukaan app in 5 languages to reach customers
            online and offline
          </div>
          <div className="h-[300px]"></div>
        </div>

        <img
          src="/india-intro.png"
          className="absolute bottom-0 left-1/2 lg:left-auto lg:translate-x-0 -translate-x-1/2 lg:right-20 -z-10 px-7 "
        />
      </div>
      <div className="w-full bg-[#37445a] h-[96px]  text-center  justify-center items-center text-white text-sm sm:text-base md:text-xl lg:text-2xl gap-2 md:gap-5 flex flex-col md:flex-row  px-10">
        Are you looking to become a Trisaran Money Partner?
        <div className="px-6 bg-green-600 rounded-full py-1 md:py-2 text-base hover:scale-110 shadow-2xl transform duration-150">
          Click Here
        </div>
      </div>
      {/* finance dukan. #F8F8F8*/}
      <div className="w-full py-[80px] px-5 relative">
        <div className="h-[250px] bg-[#F8F8F8] w-full absolute -z-30 left-0 top-0 "></div>
        <div>
          <h3 className="text-[25px] md:text-[32px] font-medium  text-center text-[#1A2343] ">
            Aapki apni finance ki dukaan
          </h3>
          <div className="h-[6px] w-[80px] bg-[#4eb543]  my-[15px] mx-auto "></div>
          <div className="flex gap-5 w-full justify-center mt-[50px] flex-wrap  ">
            {financeOnline.map((item) => (
              <div className="max-w-[280px] w-full  p-[13px] text-center shadow-lg rounded-xl bg-white">
                <img
                  src={item.img}
                  className="max-h-[120px] sm:max-h-[148px] mx-auto"
                />
                <div className="text-[#4D5870] font-medium text-[14px] sm:text-[18px] text-center pt-4">
                  {item.text}
                </div>
                <div className="h-[17px]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust. #F8F8F8*/}
      <div className="pb-[80px] pt-[40px] px-[30px]">
        <div>
          <h3 className="text-[25px] md:text-[32px] font-medium  text-center text-[#1A2343]  ">
            Why is Trisaran the #1 trusted
            <br /> platform for financial consultants
          </h3>
          <div className="h-[6px] w-[80px] bg-[#4eb543]  my-[15px] mx-auto "></div>
        </div>
        <div className="w-full flex justify-center gap-5 pt-[50px] max-w-[1200px] mx-auto flex-wrap">
          {trust.map((item) => (
            <div className="text-center p-[10px] w-full max-w-[235px]">
              <div className="h-[92px] w-[92px] rounded-full bg-amber-100 mx-auto"></div>
              <h4 className="text-[#1A2343] font-medium text-[16px] md:text-[20px] mb-[5px] text-center mt-4">
                {item.head}
              </h4>
              <div className=" text-[14px] lg:text-base">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Earn. #F8F8F8*/}
      <div>
        <div className="py-[70px] bg-[#F8F8F8]">
          <h3 className="text-[25px] md:text-[32px] font-medium  text-center text-[#1A2343]  ">
            <h3>Who can earn with Trisaran?</h3>
          </h3>
          <div className="h-[6px] w-[80px] bg-[#4eb543]  my-[15px] mx-auto "></div>
        </div>
        <div className="flex justify-center">
          <div className="mx-10 flex flex-wrap justify-around gap-10 max-w-[1200px]  relative bg-white -top-13 rounded-2xl shadow-md py-[30px]">
            {earn.map((item) => (
              <div className="flex flex-col items-center min-w-[168px] ">
                <img className="h-[58px] w-[58px]" src={item.img} />
                <div>{item.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grow. #F8F8F8*/}
      <div className="pb-[60px] mx-5">
        <div className="py-[30px] ">
          <h3 className="text-[25px] md:text-[32px] font-medium  text-center text-[#1A2343]  ">
            <h3>Grow your financial consultancy business</h3>
          </h3>
          <div className="h-[6px] w-[80px] bg-[#4eb543]  my-[15px] mx-auto "></div>
        </div>
        <div className="flex justify-center">
          <div className="w-fit flex flex-col gap-6  ">
            {grow.map((item) => (
              <div className="py-[15px] px-[30px] border border-[2px] border-[#707070]/30 w-full rounded-xl ">
                <div className="uppercase text-[20px] font-medium">
                  {item.heading}
                </div>
                <div className="mt-1 md:mt-5 text-[#707070] text-[15px] font-light">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success. #F8F8F8*/}
      <div className="bg-[#F8F8F8]  py-[70px]">
        <div>
          <h3 className="text-[25px] md:text-[32px] font-medium  text-center text-[#1A2343]  ">
            <h3>How we ensure your success</h3>
          </h3>
          <div className="h-[6px] w-[80px] bg-[#4eb543]  my-[15px] mx-auto "></div>
        </div>
        <div className="flex flex-wrap max-w-[900px] w-fit mx-auto justify-center gap-7 sm:gap-10 mt-[50px] sm:mt-[80px] px-5">
          {success.map((item) => (
            <div className="flex gap-5">
              <div className="h-[62px] w-[62px] bg-white rounded-full">
                <img src={item.img} className="p-1" />
              </div>
              <div className="max-w-[150px] md:max-w-[172px]">
                <h4 className="text-[18px] md:text-[21px] leading-7 font-medium text-[#4D5870]">
                  {item.heading}
                </h4>
                <div className="text-[#bfbfbf] font-light text-[14px] sm:text-[16px]">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner. #F8F8F8*/}
      <div>
        <div className="pt-[70px] pb-[30px]  ">
          <h3 className="text-[25px] md:text-[32px] font-medium  text-center text-[#1A2343] ">
            What our Trisaran Partners say
          </h3>
          <div className="h-[6px] w-[80px] bg-[#4eb543]  my-[15px] mx-auto "></div>
        </div>
        <div className="flex justify-center mb-10 w-full">
          <div className="flex max-w-[1200px] w-full justify-center  gap-5 mx-5 flex-row flex-wrap">
            {partner.map((item) => (
              <div className="bg-[#F8F8F8]  shadow-lg rounded-xl p-5 max-w-[350px]">
                <div className="text-center text-[14px] text-[#969696] min-h-[130px]">
                  {item.desc}
                </div>
                <div className="flex w-full justify-center gap-5 mt-3">
                  <img
                    src={item.image}
                    className="h-[60px] w-[60px] rounded-full"
                  />
                  <div>
                    <div className="text-[15px]">{item.name}</div>
                    <div className="text-[14px] text-[#969696]">{item.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[250px] w-full bg-linear-to-t from-[#41a836] to-[#31f21d]"></div>
        <div className="relative z-10 -top-30 flex justify-center">
          <div className="max-w-[700px] lg:max-w-[1000px] flex rounded-[50px] min-h-[310px]  md:h-[500px] lg:h-full w-full bg-[#37445a] px-10 pt-10 relative overflow-hidden  mx-5 md:mx-10">
            <div className="w-full text-center lg:text-start">
              <div className="text-white text-[24px] md:text-[30px]">
                Register as a Trisaran Partner
              </div>
              <div className="mt-1 text-white text-[18px] md:text-[22px]">
                Grow your business. Grow your career
              </div>
              <div className="mx-auto lg:mx-0 mt-10 px-6 w-fit text-black bg-white rounded-full py-3 md:py-3 text-base hover:scale-110 shadow-2xl transform duration-150">
                Register Now
              </div>
            </div>
            <div className="h-[450px] md:hidden"></div>

            {/* <img
              src="/shake.png"
              className="h-[300px]  absolute bottom-0  left-1/2  lg:left-auto  -translate-x-1/2 lg:translate-x-0 lg:right-10 object-cover"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
