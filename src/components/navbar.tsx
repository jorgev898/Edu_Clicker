import {
	CircleUser,
	Menu,
	Package2,
	Search,
	BookOpen,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const description =
	"An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image."

export function Navbar({ children }) {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
				<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
					<a
						href="#"
						className="flex items-center gap-2 text-lg font-semibold md:text-base"
					>
						<BookOpen className="h-6 w-6 text-[#2b43f1]" />
						<span className="sr-only">Edu Clickers</span>
					</a>
					<a
						href="/dashboard"
						className="text-foreground transition-colors hover:text-foreground"
					>
						Dashboard
					</a>
					<a
						href="#"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						Examenes
					</a>
					<a
						href="#"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						Notas
					</a>
					<a
						href="#"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						Calendario
					</a>
					<a
						href="#"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						Cursos
					</a>
				</nav>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant="outline"
							size="icon"
							className="shrink-0 md:hidden"
						>
							<Menu className="h-5 w-5" />
							<span className="sr-only">Abrir menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<nav className="grid gap-6 text-lg font-medium">
							<a
								href="#"
								className="flex items-center gap-2 text-lg font-semibold"
							>
								<Package2 className="h-6 w-6" />
								<span className="sr-only">Edu Clickers</span>
							</a>
							<a href="/dashboard" className="hover:text-foreground">
								Dashboard
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								Examenes
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								Notas
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								Calendario
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								Cursos
							</a>
						</nav>
					</SheetContent>
				</Sheet>
				<div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
					<form className="ml-auto flex-1 sm:flex-initial">
						<div className="relative">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								type="search"
								placeholder="Buscar..."
								className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
							/>
						</div>
					</form>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="secondary" size="icon" className="rounded-full">
								<CircleUser className="h-5 w-5" />
								<span className="sr-only">Toggle user menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem><a href="/profile" className="w-full">Perfil</a></DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem><a href="/" className="w-full">Cerrar sesion</a></DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>
			{children}
		</div>
	)
}
