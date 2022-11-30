import { useQuery } from '@tanstack/react-query'

const fetchdata = (): Promise<string> =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('hellow')
		}, 2000)
	})

export default function Index() {
	const { data, isLoading, error } = useQuery({
		queryFn: fetchdata,
		queryKey: ['some-data'],
	})

	if (error) return <div>there is an error</div>
	if (isLoading) return <div>loading...</div>
	if (!data) return <div>no data</div>

	return (
		<div className="ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md">lorem</div>
	)
}
