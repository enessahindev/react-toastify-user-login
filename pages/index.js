import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flex, Text, Box, Input, Button } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "admin@example.com" && password === "enessahin") {
      toast.info("İşlem başarılı. Yönlendiriliyorsun. 🥳", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        window.location.href = "https://www.enessahin.dev";
      }, 5000);
    } else {
      toast.error("Kullanıcı adı veya şifre hatalı. 😡", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      marginTop="300"
    >
      <Box>
        <Wrap>
          <WrapItem>
            <Avatar
              name="Enes Şahin"
              src="https://cdn-icons-png.flaticon.com/512/7960/7960597.png"
              height="200px"
              width="200px"
              marginRight="10px"
            />
          </WrapItem>
        </Wrap>
      </Box>
      <Box>
        <Box>
          <Text>
            <h1>React-Toastify Kullanımı</h1>
          </Text>
        </Box>
        <FormControl
          width="100%"
          margin="0"
          display="grid"
          onSubmit={handleSubmit}
        >
          <Input
            size="lg"
            height="30px"
            padding="0 18px"
            margin="8px 0"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            size="lg"
            height="30px"
            padding="0 18px"
            margin="8px 0"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            size="xs"
            cursor="pointer"
            height="35px"
            width="170px"
            border="1px"
            backgroundColor="#555DBA"
            color="#fff"
            type="submit"
            onClick={handleSubmit}
          >
            Giriş işlemi yap
          </Button>
        </FormControl>
        <ToastContainer />
        <Box>
          <Text>email : admin@example.com</Text>
          <Text>password : enessahin</Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
