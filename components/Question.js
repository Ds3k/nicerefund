import { FiSearch } from "react-icons/fi";
import Questions from "../components/Questions";

function Question() {
  const faqs = [
    {
      id: 1,
      question: " How quickly will I get my refunds?  ",
      answer:
        " Some taxpayers received their refund in as little as 7 days.Most refunds are issued in less than 21 calendar day",
    },
    {
      id: 2,
      question: "When is the first day I can file my taxes?",
      answer:
        "The first day to electronically file your taxes is January 19, 2016 however you can begin to file your tax returns now to ensure you are transmitted on the first day.",
    },
    {
      id: 3,
      question:
        " How do I check the status or get information about my refunds? ",
      answer:
        " Go to www.irs.gov and click on “where’s my refund?” We also have the like for it on our about page.",
    },
    {
      id: 4,
      question: "How do I get a tax return transcript online? ",
      answer:
        "You must verify your identity online by registering as a guest or creating a User ID/password. As part of the registration process, you will be asked for an e-mail address we will use to send you a confirmation code. You’ll use the code to continue with the registration process. Don’t close the window or navigate away from the IRS page to check your e-mail; the confirmation code will be sent to your e-mail address within 10 minutes of requesting it",
    },
    {
      id: 5,
      question: "Who can I claim as dependant?",
      answer:
        "You can claim a “qualifying child” or “qualifying relative” if they meet specific requirements related to residence, relationship to you, age, financial support provided and income. Even significant others or friends can qualify in some cases. ",
    },
    {
      id: 6,
      question: "Are unemployment benefits taxable?",
      answer: "Yes, unemployment income is taxable income.",
    },
    {
      id: 7,
      question: "What is considered a charitable contribution?",
      answer: "Donating money (including securities or business ownership interests), goods or services to an organization and deduct the market value of this contribution on your income tax return. You can deduct travel expenses if it’s related to volunteering directly with a non-profit organization.Many people have questions about the value of goods they donate. The rule is you can deduct the fair market value at which they would re-sell an item.",
    },
  ];

  return (
    <div className="container-fluid p-0">
      <div className="faq-wrapper">
        <div className="img-container">
          <img src="./images/faqbg.png" alt="image" />
        </div>
        <div className="text-wrapper">
          <h1 className="text text-uppercase"> faqs </h1>
        </div>
        <div className="container mt-5 pt-5">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <p>Expand all</p>
              <p className="ms-5">Collapse all</p>
            </div>
            <div className="d-flex search-wrapper">
              <div className="position-relative">
                <FiSearch className="position-absolute search-icon" />
                <input type="text" className="h-100 ms-4 input" placeholder="search for question" />
              </div>
              <button className="btn-green"> Search </button>
            </div>
          </div>
          <div className="list my-5">
            {faqs.map(faq => {
              return <Questions faq={faq} />;
            
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;


