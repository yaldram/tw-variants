import { Button } from "./Button";

export function App() {
  return (
    <div style={{ minHeight: "100vh" }} className="flex gap-md">
      <div className="flex flex-col basis-1/2 gap-xl p-lg">
        <div className="flex gap-md">
          <Button size="xs" colorScheme="green">
            Click Me
          </Button>
          <Button size="xs" colorScheme="orange">
            Click Me
          </Button>
          <Button size="xs" colorScheme="red">
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button varaint="outline" size="xs" colorScheme="green">
            Click Me
          </Button>
          <Button varaint="outline" size="xs" colorScheme="orange">
            Click Me
          </Button>
          <Button varaint="outline" size="xs" colorScheme="red">
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button colorScheme="green">Click Me</Button>
          <Button colorScheme="orange">Click Me</Button>
          <Button colorScheme="red">Click Me</Button>
        </div>

        <div className="flex gap-md">
          <Button varaint="outline" colorScheme="green">
            Click Me
          </Button>
          <Button varaint="outline" colorScheme="orange">
            Click Me
          </Button>
          <Button varaint="outline" colorScheme="red">
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button size="lg" colorScheme="green">
            Click Me
          </Button>
          <Button size="lg" colorScheme="orange">
            Click Me
          </Button>
          <Button size="lg" colorScheme="red">
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button varaint="outline" size="lg" colorScheme="green">
            Click Me
          </Button>
          <Button varaint="outline" size="lg" colorScheme="orange">
            Click Me
          </Button>
          <Button varaint="outline" size="lg" colorScheme="red">
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="green"
          >
            Click Me
          </Button>
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="orange"
          >
            Click Me
          </Button>
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="red"
          >
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="green"
            varaint="outline"
          >
            Click Me
          </Button>
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="orange"
            varaint="outline"
          >
            Click Me
          </Button>
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="red"
            varaint="outline"
          >
            Click Me
          </Button>
        </div>
      </div>

      <div className="dark flex flex-col bg-gray-800 flex-wrap basis-1/2 gap-xl p-lg">
        <div className="flex gap-md">
          <Button size="xs" colorScheme="green">
            Click Me
          </Button>
          <Button size="xs" colorScheme="orange">
            Click Me
          </Button>
          <Button size="xs" colorScheme="red">
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button varaint="outline" size="xs" colorScheme="green">
            Click Me
          </Button>
          <Button varaint="outline" size="xs" colorScheme="orange">
            Click Me
          </Button>
          <Button varaint="outline" size="xs" colorScheme="red">
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button colorScheme="green">Click Me</Button>
          <Button colorScheme="orange">Click Me</Button>
          <Button colorScheme="red">Click Me</Button>
        </div>

        <div className="flex gap-md">
          <Button varaint="outline" colorScheme="green">
            Click Me
          </Button>
          <Button varaint="outline" colorScheme="orange">
            Click Me
          </Button>
          <Button varaint="outline" colorScheme="red">
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button size="lg" colorScheme="green">
            Click Me
          </Button>
          <Button size="lg" colorScheme="orange">
            Click Me
          </Button>
          <Button size="lg" colorScheme="red">
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button varaint="outline" size="lg" colorScheme="green">
            Click Me
          </Button>
          <Button varaint="outline" size="lg" colorScheme="orange">
            Click Me
          </Button>
          <Button varaint="outline" size="lg" colorScheme="red">
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="green"
          >
            Click Me
          </Button>
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="orange"
          >
            Click Me
          </Button>
          <Button
            size={{
              md: "xs",
              lg: "lg",
            }}
            colorScheme="red"
          >
            Click Me
          </Button>
        </div>

        <div className="flex gap-md">
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="green"
            varaint="outline"
          >
            Click Me
          </Button>
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="orange"
            varaint="outline"
          >
            Click Me
          </Button>
          <Button
            size={{
              lg: "xs",
              md: "lg",
            }}
            colorScheme="red"
            varaint="outline"
          >
            Click Me
          </Button>
        </div>
      </div>
    </div>
  );
}
