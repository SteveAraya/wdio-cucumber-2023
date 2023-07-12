
Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/focal64"  # Selecciona la imagen base de la máquina virtual
  
    # Configuración de la máquina virtual
    config.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"  # Tamaño de la memoria RAM asignada a la máquina virtual
    end
  
    config.vm.provision "shell", inline: <<-SHELL
        # Actualizar los repositorios del sistema operativo
        sudo apt-get update

        # Install Chrome Driver: Remember to update the version
        sudo wget https://chromedriver.storage.googleapis.com/2.37/chromedriver_linux64.zip -P /usr/local/share
        sudo unzip /usr/local/share/chromedriver_linux64.zip -d /usr/local/share
        sudo rm /usr/local/share/chromedriver_linux64.zip
        # Install Chrome Browser
        sudo apt-get install -y libxss1 libappindicator1 libindicator7
        wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -P ~/
        sudo dpkg -i ~/google-chrome*.deb
        sudo apt-get install -f -y
  
        # Instalar Git
        sudo apt-get install -y git
    
        # Clonar el proyecto utilizando Git
        git clone https://github.com/SteveAraya/wdio-cucumber-2023.git /home/vagrant/proyecto
    
        # Instalar Node.js y npm
        curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
        sudo apt-get install -y nodejs
    
        # Instalar las dependencias de Node.js
        cd /home/vagrant/proyecto
        npm install
    SHELL
  end
  
  