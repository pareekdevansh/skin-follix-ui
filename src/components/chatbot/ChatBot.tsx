import React, { useState, useEffect, useRef } from "react";
import {
    Box,
    Typography,
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Fab,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import { KeyboardDoubleArrowDown, Remove, ZoomInMap, ZoomOutMap } from "@mui/icons-material";
import LottieWrapper from "../LottieWrapper/LottieWrapper";

interface Message {
    sender: "user" | "bot";
    text: string;
}

const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: "user", text: "Hi!!" },
        { sender: "bot", text: "Hello! How can I help you today?" },
        { sender: "user", text: "I need help with my account." },
    ]);
    const [userInput, setUserInput] = useState("");
    const [isBotTyping, setIsBotTyping] = useState(false);
    const [isMinimized, setIsMinimized] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const chatBoxRef = useRef<HTMLDivElement | null>(null);

    const handleSend = () => {
        if (!userInput.trim()) return;

        setMessages((prev) => [...prev, { sender: "user", text: userInput }]);
        setUserInput("");

        setIsBotTyping(true);
        // replace with api call in future
        setTimeout(() => {
            setIsBotTyping(false);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: `You said: ${userInput}` },
            ]);
        }, 1500);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSend();
        }
    };

    const toggleMinimize = () => {
        setIsMinimized((prev) => !prev);
        setIsExpanded(false);
    };

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleScroll = () => {
        if (!chatBoxRef.current) return;
        const isBottom =
            chatBoxRef.current.scrollHeight - chatBoxRef.current.scrollTop <=
            chatBoxRef.current.clientHeight + 10;
        setIsAtBottom(isBottom);
    };

    useEffect(() => {
        if (isAtBottom) {
            scrollToBottom();
        }
    }, [messages, isAtBottom]);

    return (
        <>
            {isMinimized ? (
                <Box sx={{ position: "fixed", bottom: 24, right: 24 }}>
                    <Fab
                        color="primary"
                        aria-label="Open Chat"
                        size="large"
                        onClick={toggleMinimize}
                        sx={{ transition: "transform 0.3s ease" }}
                    >
                        <ChatIcon />
                    </Fab>
                </Box>
            ) : (
                <Box
                    sx={{
                        position: "fixed",
                        bottom: isMinimized ? 20 : 0,
                        right: 20,
                        minWidth: "350px",
                        width: { md: isExpanded ? "50%" : "350px", sm: "350px" },
                        height: isExpanded ? "90vh" : "450px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderRadius: 3,
                        transition: "height 0.3s ease, width 0.3s ease",
                        zIndex: 9999,
                        color: "#f5f5f5",
                        boxShadow: 3,
                        backgroundColor: "#f0f0f0",
                    }}
                >
                    {/* Chat Header */}
                    <Box
                        sx={{
                            backgroundColor: "#0084FF",
                            color: "white",
                            p: 1,
                            paddingX: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                        }}
                    >
                        <Typography variant="h6">ChatBot</Typography>
                        <Box sx={{ display: "flex" }}>
                            <IconButton
                                onClick={toggleMinimize}
                                sx={{ color: 'white', fontSize: 'small' }}
                                aria-label={isMinimized ? "Expand Chat" : "Minimize Chat"}
                            >
                                {isMinimized ? <ChatIcon /> : <Remove />}
                            </IconButton>
                            <IconButton
                                onClick={toggleExpand}
                                sx={{
                                    color: "white",
                                    fontSize: "small",
                                    transition: "transform 0.3s ease",
                                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                                aria-label={isExpanded ? "Collapse Chat" : "Expand Chat"}
                            >
                                {isExpanded ? <ZoomInMap /> : <ZoomOutMap />}
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Chat Messages */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            overflowY: "auto",
                            p: 2,
                            position: "relative",
                            backgroundColor: "grey.100",
                        }}
                        ref={chatBoxRef}
                        onScroll={handleScroll}
                    >
                        <List>
                            {messages.map((message, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        justifyContent:
                                            message.sender === "user" ? "flex-end" : "flex-start",
                                        width: "100%",
                                        marginRight: message.sender === "user" ? "-4px" : "0",
                                        marginLeft: message.sender === "user" ? "0" : "-4px",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            textAlign: message.sender === "user" ? "right" : "left",
                                            backgroundColor:
                                                message.sender === "user" ? "#DCFAC6" : "#FFFFFF",
                                            color: "#000",
                                            p: 1,
                                            px: 2,
                                            borderRadius: 2,
                                            boxShadow: 1,
                                            width: "auto",
                                        }}
                                    >
                                        <Typography>{message.text}</Typography>
                                    </Box>
                                </ListItem>
                            ))}
                            {isBotTyping && (
                                <LottieWrapper src="/assets/animations/typing.lottie"
                                    speed={.75} />
                            )}
                            <div ref={messagesEndRef}></div>
                        </List>

                        {!isAtBottom && (
                            <IconButton
                                onClick={scrollToBottom}
                                sx={{
                                    position: "fixed",
                                    bottom: 75,
                                    right: 40,
                                    color: "primary.main",
                                }}
                                aria-label="Scroll to bottom"
                            >
                                <KeyboardDoubleArrowDown />
                            </IconButton>
                        )}
                    </Box>

                    {/* Chat Input */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            p: 2,
                            borderTop: "1px solid #ccc",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Type a message..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            fullWidth
                            aria-label="Type a message"
                        />
                        <IconButton
                            color="primary"
                            onClick={handleSend}
                            sx={{ ml: 1 }}
                            aria-label="Send message"
                        >
                            <SendIcon />
                        </IconButton>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default ChatBot;
