function localtunnel {
  lt -s ppttccddvv2018y --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
