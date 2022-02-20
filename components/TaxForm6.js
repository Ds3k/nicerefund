import News from '../components/News'

function TaxForm6() {
  return (
     <>
     <div className="container-fluid">
       <div>
         <h1>Individual Income Tax Organizer</h1>
         <p>
           Thank you for completing the Nice Refund Tax Organizer! Please allow
           72 hours or less for our team to contact you.
           <br />
           <br /> If you choose to e-file, we will confirm refund or payment
           before tax returns are e-filed.
         </p>
         <div>
           <p>
             Once reviewed, here are your options to have Nice Refund Tax Service
             maximize your income tax return.
           </p>
           <ul>
             <li>Schedule a personal meeting at our private office</li>
             <li>Schedule a phone call to complete your tax return</li>
             <li>Scan all of your documents and send via E-mail/Fax</li>
           </ul>
         </div>
         <p>
           Thanks again for choosing Nice Refund Tax Service for all tax
           preparation needs.
         </p>
       </div>
     </div>
     <div className='main bg-danger'>
        <News/>
     </div>
     </>
  );
}

export default TaxForm6;

