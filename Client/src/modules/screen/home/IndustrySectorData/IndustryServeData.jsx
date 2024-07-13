import './IndustryServeData.css';
// eslint-disable-next-line react/prop-types
const IndustryServeData = ({ industryId, image, }) => {
  return (
    <>
      <section className='IndustryInfo'>
        <div>
          <ul>
            {
              industryId === 1 &&
              <div id='health'>
                <li>There is a need for healthcare professionals for each and every individual. In serving the individuals with healthcare services so we aim to provide the secure and user friendly healthcare infrastructure services to provide individuals with an evolved healthcare environment. We have the solutions for healthcare industries such as providing electronic health records, security support, enhanced decision-making, technological innovation, better patient involvement, real time interaction solutions, location tracking, laboratory management, clinical content management, health record management, data discovery, warehousing, ETL, OLAP, data visualization, Intelligence clinical automation, data segregation, financial management, performance report and analysis, data accuracy, AR based telemedicine and VR based telemedicine services with our comprehensive web development services.</li>
                <img src={image} alt="images" />
              </div>
            }
            {
              industryId === 2 &&
              <div id='education'>
                <li>There is a need to understand the competitiveness and complexity that are going to be there in the education business and make it run on a day-to-day basis. One needs to gain valuable opportunities that need an online marketing campaign that uses multiple strategies to gain keen insights and a competitive online edge. When they want to establish a strong digital presence they need to build a strong foundation for an educational website. We as a web development services company specialise in providing tailored solutions specifically designed for education companies. We have the expertise to provide education businesses that can thrive in the digital landscape. We understand the need for a visually appealing and user friendly website as the cornerstone of a successful online presence for companies that are focused on the education space. We are a full web development service that provides the services in education industry.</li>
                <img src={image} alt="images" />
              </div>
            }
            {
              industryId === 3 &&
              <div id='hospitaltourism'>
                <li>The hospitality and design sector relies heavenly on an effective web presence, more than any other. The reason for that is because of the near customers that can go online first to research their travel options before anything. We as a web development service provider make sure to assist the organization in developing an effective digital strategy designed for growth. The social media presence for hospitality and tourism makes sure to help in increase the brand awareness, and engagement with customers, and promote special offers and events for the customers. The presence of social media can help the hospitality and tourism to reach a wider audience, showcase the unique features and offerings, and to receive valuable feedback from customers. We as a web development service provider make sure that we can serve the related audience for the hospitality and tourism sector and provide them with our full web development services to the customers.</li>
                <img src={image} alt="images" />
              </div>
            }
            {
              industryId === 4 &&
              <div id='ecommerce'>
                <li>When someone wants to run the ecommerce or a physical storefront they need to have the availability for returning customers. In today’s age to reach someone is by them providing about prominently being visible to them online where they have been looking. There is a need to integrate business apps such as inventory management, accounting software, and customer relationship management that can help to streamline business operations and help retail businesses and e-commerce platforms to receive results by staying focused on their goals and staying competitive in the market. We as a web development services provider make sure that we can provide a tactical roadmap to make our customers achieve their audience reach and customer goals by providing them with the best e-commerce services that include expertise with design, other best practices, and understanding business procedures to understand the market analysis and development needs.</li>
                <img src={image} alt="images" />
              </div>
            }
            {
              industryId === 5 &&
              <div id='banking'>
                <li>This industry explores the dynamic, fast-paced environment of money, credit, shares, and investments. Finance is an essential part of the economy as it provides liquidity in terms of money or assets that are required for individuals and businesses to invest in the future. In today’s age, financial markets are important for everyone, and for that, we provide our customers with the solution of web development services and understand their marketing needs by providing them the benefit of Search Engine Optimization to drive traffic, connect with clients, and generating awareness, social media marketing techniques, content management and a lot other web development services that cover their financial or business website needs. We as a web designing services provider make sure to enhance finance, banking, corporate, and financial markets services to the customers who want to grow in the finance industry and make sure to cover their needs.</li>
                <img src={image} alt="images" />
              </div>
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default IndustryServeData;