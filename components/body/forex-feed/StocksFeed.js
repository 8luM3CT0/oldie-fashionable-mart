//front-end
import { StockQuote } from '../../index'
//back-end
function StocksFeed ({ forex }) {
  return (
    <>
      <h1
        className='
    text-2xl 
    font-google-sans 
    font-normal 
    text-purple-400
    top-0
    left-0
    px-7
    '
      >
        Featured stocks
      </h1>
      <div
        className='
      grid 
        grid-flow-row-dense 
        md:grid-col-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        mx-auto
    pb-[120px]'
      >
        {forex
          .slice(7, 11)
          .map(
            ({
              symbol,
              name,
              price,
              change,
              changesPercentage,
              dayLow,
              dayHigh,
              yearHigh,
              yearLow,
              marketCap,
              priceAvg50,
              priceAvg200,
              volume,
              avgVolume,
              open,
              previousClose,
              eps,
              pe,
              category
            }) => (
              <StockQuote
                key={symbol}
                symbol={symbol}
                name={name}
                price={price}
                change={change}
                changePercentage={changesPercentage}
                dayLow={dayLow}
                dayHigh={dayHigh}
                yearHigh={yearHigh}
                yearLow={yearLow}
                marketCap={marketCap}
                priceAvg50={priceAvg50}
                priceAvg200={priceAvg200}
                volume={volume}
                avgVolume={avgVolume}
                open={open}
                previousClose={previousClose}
                eps={eps}
                pe={pe}
                category={category}
              />
            )
          )}
      </div>
    </>
  )
}

export default StocksFeed
