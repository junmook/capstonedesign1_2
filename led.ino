int led[3] = {15, 4, 17};
int gnd[3] = {2, 16, 5};
int trigPin = 25;
int echoPin = 26;
long duration;
int distance;
void setup() {
  // put your setup code here, to run once:
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT);
  for(int i = 0; i<3; i++){
    pinMode(led[i], OUTPUT);
    digitalWrite(led[i], 1);

    pinMode(gnd[i], OUTPUT);
    digitalWrite(gnd[i], 0);
  }
  Serial.begin(115200);
}
//int i=0;
void loop() {
  // put your main code here, to run repeatedly:
  static int j=30;
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
// Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
// Calculating the distance
  distance= duration*0.034/2;
  // put your main code here, to run repeatedly:
  if(distance<10){
    for (int k=0; k<3; k++) {
       digitalWrite(led[k], 1);
       delay(50);
       digitalWrite(led[k], 0);
       delay(100);
    }
  }
  Serial.print("Distance: ");
  Serial.println(distance);
}
