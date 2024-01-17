import React from "react";
import { increment, decrement, configNumber, reset } from "../counter/slice";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../hook";
import Button from "@mui/material/Button";
import { Box, Paper } from "@mui/material";
const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  const [number, setNumber] = useState<number>(0);

  const resetAll = () => {
    setNumber(0);
    dispatch(reset());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 5,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Paper elevation={3} sx={{ width: "200px" }}>
        <Box sx={{ my: 1 }}>
          <Button
            variant="contained"
            size="medium"
            onClick={() => dispatch(increment())}
            sx={{ mx: 1 }}
          >
            increase
          </Button>
          <Button
            variant="contained"
            size="medium"
            onClick={() => dispatch(decrement())}
            sx={{ mx: 1 }}
          >
            decrease
          </Button>
        </Box>

        <Box sx={{ my: 1 }}>
          <Button
            variant="contained"
            size="medium"
            onClick={() => dispatch(configNumber(Number(number)))}
            sx={{ mx: 1 }}
          >
            increase by this step
          </Button>
          <input
            type="number"
            value={Number(number)}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </Box>
        <Box sx={{ my: 1 }}>
          <Button onClick={resetAll}>reset</Button>

          <Box
            component="span"
            sx={{
              px: 3,
              py: 1,
              m: 1,
              bgcolor: (theme) => (theme.palette.mode = "dark"),
              color: (theme) => (theme.palette.mode = "dark"),
              border: "1px solid",
              borderColor: (theme) => (theme.palette.mode = "dark"),
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "100",
              width: 100,
            }}
          >
            {count}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Counter;
