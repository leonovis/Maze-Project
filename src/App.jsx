function App() {
	return (
		<div className="min-h-screen flex flex-col text-white">
			
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">

				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">Maze Project</h1>
	
				<p className="text-base md:text-lg lg:text-2xl mb-8">A Doom 3D style JavaScript Raycaster using the browser's HTML5 Canvas for rendering.</p>

				<div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
				<a target="_blank" href="https://leonovis.github.io/mazetest/" className="hover:opacity-80 duration-150">CLICK here to view live demo</a>
				</div>

				<div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
				<a target="_blank" href="https://github.com/leonovis/Maze-Project/tree/main/docs" className="hover:opacity-80 duration-150">CLICK here to view source code</a>
				</div>
			</main>
			
			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xl">Created by Leonard Akpofure</p>

					<div className="flex -mx-6">
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
					</div>
				</div>
			</footer>
		</div>	
	)
}

export default App
