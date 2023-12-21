import { Box, Button, Divider, IconButton, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import styled from "@emotion/styled"
import { shades } from "../../theme"
import {
	decreaseCount,
	increaseCount,
	removeFromCart,
	setIsCartOpen,
} from "../../state"
import { useNavigate } from "react-router-dom"

// styled component
const FlexBox = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

function CartMenu() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const cart = useSelector((state) => state.cart.cart)
	const isCartOpen = useSelector((state) => state.cart.isCartOpen)

	return (
		// OVERLAY; When Modal opens, we want to lower opacity on left side of screen and bring up the modal menu up
		<Box
			display={isCartOpen ? "block" : "none"}
			backgroundColor="rgba(0,0,0,0.4)"
			position="fixed"
			zIndex={10}
			width="100%"
			height="100%"
			left="0"
			top="0"
			overflow="auto"
		>
			{/* MODAL */}
			<Box
				position="fixed"
				right="0"
				bottom="0"
				width="max(400,30%)"
				height="100%"
				backgroundColor="white"
			>
				<Box padding="30px" overflow="auto" height="100%">
					{/* HEADER */}
					<FlexBox mb="15">
						<Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>
						<IconButton onClick={() => setIsCartOpen({})}>
							<CloseIcon />
						</IconButton>
					</FlexBox>

					{/* CART LIST */}
					<Box>
						{cart.map((item) => (
							<Box key={`${item.attributes.name}-${item.id}`}>
								<FlexBox p="15px 0">
									{/* ITEM IMAGE */}
									<Box flex="1 1 40%">
										<img
											alt={item?.name}
											width="123px"
											height="164px"
											src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
										/>
									</Box>

									<Box flex="1 1 60%">
										{/* ITEM NAME AND DESC*/}
										<FlexBox mb="5px">
											<Typography fontWeight="bold">
												{item.attributes.name}
											</Typography>
											<IconButton
												onClick={() =>
													dispatch(removeFromCart({ id: item.id }))
												}
											>
												<CloseIcon />
											</IconButton>
										</FlexBox>
										<Typography>{item.attributes.shortDescription}</Typography>

										{/* AMOUNT incres/deces */}
										<FlexBox m="15px 0">
											<Box
												display="flex"
												alignItems="center"
												border={`1.5px solid ${shades.neutral[500]}`}
											>
												<IconButton
													onClick={() =>
														dispatch(decreaseCount({ id: item.id }))
													}
												>
													<RemoveIcon />
												</IconButton>
												<Typography>{item.count}</Typography>
												<IconButton
													onClick={() =>
														dispatch(increaseCount({ id: item.id }))
													}
												>
													<AddIcon />
												</IconButton>
											</Box>
										</FlexBox>

										{/* PRICE */}
										<Typography fontWeight="bold">
											${item.attributes.price}
										</Typography>
									</Box>
								</FlexBox>
								<Divider />
							</Box>
						))}
					</Box>

					{/* USER ACTIONS */}
					<Box></Box>
				</Box>
			</Box>
		</Box>
	)
}

export default CartMenu
