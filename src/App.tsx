import { Button } from "./Button";

export function App() {
  return (
    <div className="flex gap-xl">
      <div className="light flex flex-col">
        <div className="flex flex-wrap gap-xl m-xl">
          <Button>Click Me</Button>
          <Button colorScheme="secondary">Click Me</Button>
          <Button colorScheme="success">Click Me</Button>
          <Button colorScheme="warning">Click Me</Button>
          <Button colorScheme="error">Click Me</Button>
        </div>

        <div className="flex flex-wrap gap-xl m-xl">
          <Button isShadow>Click Me</Button>
          <Button isShadow colorScheme="secondary">
            Click Me
          </Button>
          <Button isShadow colorScheme="success">
            Click Me
          </Button>
          <Button isShadow colorScheme="warning">
            Click Me
          </Button>
          <Button isShadow colorScheme="error">
            Click Me
          </Button>
        </div>

        <div className="flex flex-wrap gap-xl m-xl">
          <Button variant="bordered">Click Me</Button>
          <Button variant="bordered" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="success">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="error">
            Click Me
          </Button>
        </div>

        <div className="flex flex-wrap gap-xl m-xl">
          <Button variant="ghost">Click Me</Button>
          <Button variant="ghost" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="success">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="error">
            Click Me
          </Button>
        </div>

        <div className="flex flex-wrap gap-xl m-xl">
          <Button variant="flat">Click Me</Button>
          <Button variant="flat" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="success">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="error">
            Click Me
          </Button>
        </div>
      </div>

      <div className="dark bg-black flex flex-col">
        <div className="flex flex-wrap gap-xl m-xl">
          <Button>Click Me</Button>
          <Button colorScheme="secondary">Click Me</Button>
          <Button colorScheme="success">Click Me</Button>
          <Button colorScheme="warning">Click Me</Button>
          <Button colorScheme="error">Click Me</Button>
        </div>

        <div className="flex flex-wrap gap-xl m-xl">
          <Button isShadow>Click Me</Button>
          <Button isShadow colorScheme="secondary">
            Click Me
          </Button>
          <Button isShadow colorScheme="success">
            Click Me
          </Button>
          <Button isShadow colorScheme="warning">
            Click Me
          </Button>
          <Button isShadow colorScheme="error">
            Click Me
          </Button>
        </div>

        <div className="flex flex-wrap gap-xl m-xl">
          <Button variant="bordered">Click Me</Button>
          <Button variant="bordered" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="success">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="bordered" colorScheme="error">
            Click Me
          </Button>
        </div>

        <div className="flex flex-wrap gap-xl m-xl">
          <Button variant="ghost">Click Me</Button>
          <Button variant="ghost" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="success">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="ghost" colorScheme="error">
            Click Me
          </Button>
        </div>

        <div className="flex flex-wrap gap-xl m-xl">
          <Button variant="flat">Click Me</Button>
          <Button variant="flat" colorScheme="secondary">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="success">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="warning">
            Click Me
          </Button>
          <Button variant="flat" colorScheme="error">
            Click Me
          </Button>
        </div>
      </div>
    </div>
  );
}
