import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const PlayingCard = () => {
    return (
        <Card className="w-full rounded-2xl p-1">
            <CardHeader>
                <CardTitle>
                    Play movie quize and earn free tickets
                </CardTitle>
                <CardDescription>
                    50k people are playing now
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button variant="redline" className=" text-red-600  bg-pink-200 rounded-full">
                    Start Playing
                </Button>
            </CardContent>
        </Card>
    )
};

export default PlayingCard;
