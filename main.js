import requests
import time

from keepalive import keepAlive

new_session_id = '4073522d-ff9a-44b8-bef1-6447cbef5e08'

response = requests.get('https://www.kogama.com/', cookies={'session': new_session_id})

# Call the keepAlive function
keepAlive()

# Function to send a ping to the given URL
def send_ping(url):
    response = requests.get(url, cookies={'session': new_session_id})
    print(f"Response from {url}: {response.status_code}")

# Call the send_ping function with the desired URL every 1 second
while True:
    send_ping('https://www.kogama.com/user/143157/pulse/')
    time.sleep(1)
