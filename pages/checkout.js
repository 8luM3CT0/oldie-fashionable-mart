//front-end
import {
  Currency,
  CheckoutHeader,
  Tab,
  TabList,
  TabPane,
  TabContent,
  TabItem,
  Button,
  Icon
} from '../components/'
//back-end
import { creds, store } from '../backend_services/firebase'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  selectItems,
  selectTotal
} from '../backend_services/slices/basketSlice'
import { useRouter } from 'next/router'

function checkout () {
  const [openTab, setOpenTab] = useState(2)
  const router = useRouter()

  return (
    <div
      className='
    h-screen 
    overflow-hidden 
    bg-gradient-to-t 
    from-gray-900 
    to-lime-800'
    >
      <CheckoutHeader />
      <main className='checkoutMain'>
        <Tab>
          <TabList color='green'>
            <div
              className='
                    justify-center
                    mx-auto 
                    max-w-full 
                    flex
                    items-center'
            >
              <TabItem
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                ripple='light'
                active={openTab === 1 ? true : false}
                href='tabItem'
              >
                <Icon name='attach_money' size='lg' />
                Cash
              </TabItem>
              <TabItem
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                ripple='light'
                active={openTab === 2 ? true : false}
                href='tabItem'
              >
                <Icon name='local_hospital' size='lg' />
                Decision
              </TabItem>
              <TabItem
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                ripple='light'
                active={openTab === 3 ? true : false}
                href='tabItem'
              >
                <Icon name='credit_card' size='lg' />
                Card
              </TabItem>
            </div>
          </TabList>
          <TabContent>
            <TabPane active={openTab === 1 ? true : false}>
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </TabPane>
            <TabPane active={openTab === 2 ? true : false}>
              <p>
                Ok, here's the big decision. Here's where you make what could
                either be the biggest mistake of your life, or the best decision
                ever. So here goes: Cash or Credit ?
              </p>
            </TabPane>
            <TabPane active={openTab === 3 ? true : false}>
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </TabPane>
          </TabContent>
        </Tab>
      </main>
    </div>
  )
}

export default checkout
