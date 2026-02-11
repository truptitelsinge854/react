import './App.css'
import Card from './components/Card'
import Parent from './components/usecontext/Parent'
function App() {

  let cardDetails = [{
    name: 'Mobiles',
    description: '20% off on mobiles'
  },
  {
    name: 'Electronics',
    description: '50% off on electronics'

  }]

  return (
   <>
    
    <Parent/>
    {/* <div>
      {
        cardDetails.map(cardDetail => (
          <Card name={cardDetail.name} description={cardDetail.description} />
        ))
      }
    </div> */}
   </>
  )
}

export default App
