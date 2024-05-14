'use client'
import { ChangeEvent, useState } from 'react';

import { Products } from '../../../lib/Database'
export default function page() {
	const [filter, setFilter] = useState('010000');
	const res = Products.filter((item) => item.id === filter)
	function handleSelect(event: ChangeEvent<HTMLSelectElement>): void {
		setFilter(event.target.value);
	}

	return (<>
		<div className='my-5'>
			<label>
				Select Category:
			</label>
			<select name="selectedCategory" onChange={handleSelect} className='bg-transparent border-0 text-center'>
				{Products.map((i) =>
					<option value={i.id} className='bg-transparent'>{i.name}</option>
				)}
			</select>
		</div>

		<div className='grid grid-cols-3'>
			{res.map((e) => e.subChildren.map((i) =>
				<div className='w-full min-h-40 relative'>
					<div className='border border-secondry-600 h-full flex justify-center items-center m-1 p-1 group'>
						<img className='max-w-full max-h-full group-hover:scale-110' src={i.img} alt="" />
						<h1 className='absolute top-2 bg-black/70 p-1 left-2 text-white rounded-md'>{i.id}</h1>
						<h1 className='absolute bottom-2 right-2 text-sm bg-black/70 p-1 text-white rounded-md'>{i.name}</h1>
					</div>
				</div>
			))}
		</div>
	</>);
}