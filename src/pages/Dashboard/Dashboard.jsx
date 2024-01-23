
import Layout from '../../components/shared/Layout/Layout'

const Dashboard = () => {
  return (
    <Layout>
       <div className='flex gap-10 items-center'>
       <button className='bg-purple-600 px-5 py-2 rounded-md text-white font-semibold shadow-lg'>Movie Add</button>
        <button className='bg-purple-600 px-5 py-2 rounded-md text-white font-semibold shadow-lg'> Tv Show Add</button>
       </div>
    </Layout>
  )
}

export default Dashboard
