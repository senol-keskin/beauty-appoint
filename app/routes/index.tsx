import { useQuery } from '@tanstack/react-query'

const fetchdata = (): Promise<string> =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('hellow')
		}, 2000)
	})

export default function Index() {
	const { data, isLoading } = useQuery({
		queryFn: fetchdata,
		queryKey: ['some-data'],
	})
	if (isLoading || !data) return <div>loading...</div>
	return (
		<div className="ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md">
			lorem <div>{data ? <div>{data}</div> : 0}</div>
		</div>
	)
}

