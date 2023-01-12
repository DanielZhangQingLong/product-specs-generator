import { useState, createRef } from 'react'
import './App.css'
import Table from 'react-bootstrap/Table'

function App() {
	const [productImage, setProductImage] = useState()
	const [showUploadProductImage, setShowUploadProductImage] = useState(true)
	const [productSpecsImage, setproductSpecsImage] = useState()
	const [showUploadProductSpecsImage, setshowUploadProductSpecsImage] =
		useState(true)

	const ref = createRef(null)

	const params = [
		['FRAME MATERIAL', 'PC'],
		['LENS MATERIAL', 'AC'],
		['GENDER', 'UNISEX'],
		['STYLE', 'FASHION'],
		['WEIGHT', '54G'],
	]

	const handleChangeProductImage = (e) => {
		setProductImage(URL.createObjectURL(e.target.files[0]))
		setShowUploadProductImage(false)
	}
	const handleChangeProductSpecsImage = (e) => {
		setproductSpecsImage(URL.createObjectURL(e.target.files[0]))
		setshowUploadProductSpecsImage(false)
	}

	return (
		<div className="App">
			<div id="product-specs" ref={ref}>
				<header className="product-header">PRODUCT PARAMETERS</header>
				<div className="product">
					<div className="product-image-container">
						<label htmlFor="product-image">
							<input
								style={{
									display: showUploadProductImage
										? 'block'
										: 'none',
								}}
								id="product-image"
								name="product-image"
								className="product-image"
								onChange={handleChangeProductImage}
								type="file"
							/>
							<img src={productImage} />
						</label>
					</div>
					<div className="product-details-container">
						<Table striped hover variant="dark">
							<tbody>
								{params.map((p, index) => (
									<tr key={index}>
										<td>{p[0]}</td>
										<td>{p[1]}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</div>
				<div className="product-specs-container">
					<label htmlFor="product-specs-image">
						<input
							style={{
								display: showUploadProductSpecsImage
									? 'block'
									: 'none',
							}}
							id="product-specs-image"
							name="product-specs-image"
							className="product-specs-image"
							onChange={handleChangeProductSpecsImage}
							type="file"
						/>
						<img src={productSpecsImage} />
					</label>
				</div>
			</div>
		</div>
	)
}

export default App
