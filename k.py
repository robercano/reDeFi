import os
import signal
import subprocess

def kill_node():
    try:
        output = subprocess.check_output(['ps', '-ef']).decode('utf-8')
        for line in output.split('\n'):
            if 'node' in line or 'next' in line or 'turbo' in line:
                parts = line.split()
                if len(parts) > 1:
                    pid = int(parts[1])
                    if pid != os.getpid():
                        print(f"Killing {pid}: {line}")
                        os.kill(pid, signal.SIGKILL)
    except Exception as e:
        print(e)

kill_node()
